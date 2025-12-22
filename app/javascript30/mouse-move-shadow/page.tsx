"use client";

import { useEffect, useRef } from 'react';
import Header from '@/app/_components/Header';

export default function MouseMoveShadow() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    
    if (!hero || !text) return;

    const walk = 100;

    function shadow(e: MouseEvent) {
      if (!hero || !text) return;

      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;
      
      // Adjust coordinates if the event target is not the hero itself
      if (e.target !== hero) {
        const target = e.target as HTMLElement;
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
      }

      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));

      text.style.textShadow = `
        ${xWalk * 5}px ${yWalk * 5}px 0 rgba(0, 255, 0, .5),
        ${xWalk * -5}px ${yWalk * -5}px 0 rgba(0, 0, 255, .5),
        ${yWalk * 5}px ${xWalk * 5}px 0 rgba(255, 0, 0, .5),
        ${yWalk * -5}px ${xWalk * -5}px 0 rgba(255, 255, 0, .5)
      `;
    }

    hero.addEventListener('mousemove', shadow);

    // Cleanup
    return () => {
      hero.removeEventListener('mousemove', shadow);
    };
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Mouse Move Shadow"
            description="Un efecto de sombra que sigue el movimiento del mouse. Pasa el cursor sobre el texto y observa cómo las sombras se mueven en diferentes direcciones."
            backLink={{
              href: "/javascript30",
              text: "Volver a JavaScript30",
            }}
          />
        </div>
        
        <div className="glass-container p-8">
          <div ref={heroRef} className="hero">
            <h1
              ref={textRef}
              contentEditable
              suppressContentEditableWarning
              className="hero-text"
            >
              🔥 JOSE CENTENO 🔥
            </h1>
          </div>
        </div>
      </main>

      <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
        }

        .hero-text {
          color: #ffffff;
          text-shadow: 10px 10px 0 rgba(0, 0, 0, 0.8);
          font-size: 100px;
          outline: none;
          cursor: text;
          text-align: center;
          width: 100%;
          margin: 0 auto;
          font-weight: bold;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1rem;
          }
          
          .hero-text {
            font-size: 50px;
            word-wrap: break-word;
          }
        }

        @media (max-width: 480px) {
          .hero-text {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}

