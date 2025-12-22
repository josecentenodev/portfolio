"use client";

import { useEffect, useRef, useState } from 'react';
import Header from '@/app/_components/Header';

export default function ClickAndDrag() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDown(true);
      slider.classList.add('active');
      startXRef.current = e.pageX - slider.offsetLeft;
      scrollLeftRef.current = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      setIsDown(false);
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      setIsDown(false);
      slider.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startXRef.current;
      slider.scrollLeft = scrollLeftRef.current - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDown]);

  // Generate items from 01 to 25
  const items = Array.from({ length: 25 }, (_, i) => {
    const num = i + 1;
    return num.toString().padStart(2, '0');
  });

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-6xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Click and Drag"
            description="Haz clic y arrastra horizontalmente para desplazarte por los elementos. También puedes usar la rueda del mouse o el scroll touch en dispositivos móviles."
            backLink={{
              href: "/javascript30",
              text: "Volver a JavaScript30",
            }}
          />
        </div>

        <div className="glass-container p-8">
          <div ref={sliderRef} className="items">
            {items.map((item, index) => (
              <div key={index} className={`item item${index + 1}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        .items {
          height: 800px;
          padding: 100px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          user-select: none;
          cursor: grab;
          background: rgba(255, 255, 255, 0.02);
          position: relative;
        }

        .items.active {
          cursor: grabbing;
          cursor: -webkit-grabbing;
          background: rgba(255, 255, 255, 0.05);
        }

        .items::-webkit-scrollbar {
          height: 8px;
        }

        .items::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .items::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .items::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .item {
          width: 200px;
          height: 200px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          font-weight: 100;
          color: rgba(255, 255, 255, 0.8);
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
          margin-right: 10px;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .item:nth-child(1) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .item:nth-child(2) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .item:nth-child(3) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .item:nth-child(4) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .item:nth-child(5) { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .item:nth-child(6) { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
        .item:nth-child(7) { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
        .item:nth-child(8) { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
        .item:nth-child(9) { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
        .item:nth-child(10) { background: linear-gradient(135deg, #ff8a80 0%, #ea4c89 100%); }
        .item:nth-child(11) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .item:nth-child(12) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .item:nth-child(13) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .item:nth-child(14) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .item:nth-child(15) { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .item:nth-child(16) { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
        .item:nth-child(17) { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
        .item:nth-child(18) { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
        .item:nth-child(19) { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
        .item:nth-child(20) { background: linear-gradient(135deg, #ff8a80 0%, #ea4c89 100%); }
        .item:nth-child(21) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .item:nth-child(22) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .item:nth-child(23) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .item:nth-child(24) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .item:nth-child(25) { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }

        .item:hover {
          transform: scale(1.05);
          box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .items {
            height: 600px;
            padding: 50px;
          }

          .item {
            width: 150px;
            height: 150px;
            font-size: 60px;
          }
        }

        @media (max-width: 480px) {
          .items {
            height: 400px;
            padding: 30px;
          }

          .item {
            width: 120px;
            height: 120px;
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
}

