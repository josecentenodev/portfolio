"use client";

import Header from '@/app/_components/Header'
import React, { useEffect, useRef } from 'react'

const CanvasPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajustar tamaño del canvas al contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = 400; // Puedes ajustar esto o hacerlo relativo también
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Variables para dibujar
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;
    let lineWidth = 10;
    
    function draw(e: MouseEvent) {
      if (!isDrawing) return; // Detener la función cuando no estamos dibujando
      if (!ctx) return;
      
      // Estilo de línea
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      
      // Empezar a dibujar
      ctx.beginPath();
      // Ir desde
      ctx.moveTo(lastX, lastY);
      // Ir hasta
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      
      // Actualizar últimas coordenadas
      [lastX, lastY] = [e.offsetX, e.offsetY];
      
      // Cambiar color (hue)
      hue = (hue + 1) % 360;
      
      // Cambiar grosor de línea
      if (lineWidth >= 100 || lineWidth <= 1) {
        direction = !direction;
      }
      
      if (direction) {
        lineWidth += 0.5;
      } else {
        lineWidth -= 0.5;
      }
    }
    
    // Eventos de mouse/touch
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
    
    // Eventos de touch para dispositivos móviles
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      
      isDrawing = true;
      [lastX, lastY] = [touchX, touchY];
    });
    
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      
      if (!ctx) return;
      
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(touchX, touchY);
      ctx.stroke();
      
      [lastX, lastY] = [touchX, touchY];
      
      hue = (hue + 1) % 360;
      
      if (lineWidth >= 100 || lineWidth <= 1) {
        direction = !direction;
      }
      
      if (direction) {
        lineWidth += 0.5;
      } else {
        lineWidth -= 0.5;
      }
    });
    
    canvas.addEventListener('touchend', () => isDrawing = false);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', () => {});
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', () => {});
      canvas.removeEventListener('mouseout', () => {});
      canvas.removeEventListener('touchstart', () => {});
      canvas.removeEventListener('touchmove', () => {});
      canvas.removeEventListener('touchend', () => {});
    };
  }, []);
  
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Fun with HTML5 Canvas"
            description="Experimenta con el canvas HTML5 para crear gráficos interactivos. Dibuja manteniendo presionado el mouse y moviendo el cursor."
            backLink={{
              href: "/javascript30",
              text: "Volver a los desafíos",
            }}
          />
          <div className="mt-6 mb-4 text-sm text-gray-300">
            <p>🖌️ Haz clic y mueve el mouse para dibujar líneas coloridas de grosor variable.</p>
            <p>✨ En dispositivos táctiles, usa tu dedo para dibujar.</p>
          </div>
          <div className="canvas-container relative w-full border border-gray-700 rounded-lg">
            <canvas 
              ref={canvasRef} 
              id="draw" 
              className="w-full bg-black/20 backdrop-blur-md rounded-lg"
            ></canvas>
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
            >
              Limpiar Canvas
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CanvasPage