'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DrumKit() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
      
      if (validKeys.includes(key)) {
        setActiveKey(key);
        setTimeout(() => setActiveKey(null), 100);
        
        const soundMap: { [key: string]: string } = {
          'A': 'boom',
          'S': 'clap',
          'D': 'hihat',
          'F': 'kick',
          'G': 'openhat',
          'H': 'ride',
          'J': 'snare',
          'K': 'tink',
          'L': 'tom'
        };
        
        playSound(soundMap[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClick = (key: string, sound: string) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 100);
    playSound(sound);
  };

  const getButtonClass = (key: string) => {
    const baseClass = "w-16 h-16 bg-red-500 rounded-lg transition-all duration-100 flex flex-col items-center justify-center cursor-pointer hover:bg-red-600 active:scale-95";
    const playingClass = "scale-110 bg-red-600 ring-4 ring-red-400 ring-opacity-50";
    return `${baseClass} ${activeKey === key ? playingClass : ''}`;
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Link 
            href="/javascript30" 
            className="inline-flex items-center text-sm hover:text-white transition-colors mb-6"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Volver a los desafíos
          </Link>
          <h1 className="text-4xl font-bold mb-4">JavaScript Drum Kit</h1>
          <p className="text-gray-300 mb-8">
            Presiona las teclas o haz clic en los botones para tocar la batería
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <button data-key="A" className={getButtonClass("A")} onClick={() => handleClick("A", "boom")}>
              <span className="text-2xl font-bold">A</span>
              <span className="text-xs">BOOM</span>
            </button>
            <button data-key="S" className={getButtonClass("S")} onClick={() => handleClick("S", "clap")}>
              <span className="text-2xl font-bold">S</span>
              <span className="text-xs">CLAP</span>
            </button>
            <button data-key="D" className={getButtonClass("D")} onClick={() => handleClick("D", "hihat")}>
              <span className="text-2xl font-bold">D</span>
              <span className="text-xs">HIHAT</span>
            </button>
            <button data-key="F" className={getButtonClass("F")} onClick={() => handleClick("F", "kick")}>
              <span className="text-2xl font-bold">F</span>
              <span className="text-xs">KICK</span>
            </button>
            <button data-key="G" className={getButtonClass("G")} onClick={() => handleClick("G", "openhat")}>
              <span className="text-2xl font-bold">G</span>
              <span className="text-xs">OPENHAT</span>
            </button>
            <button data-key="H" className={getButtonClass("H")} onClick={() => handleClick("H", "ride")}>
              <span className="text-2xl font-bold">H</span>
              <span className="text-xs">RIDE</span>
            </button>
            <button data-key="J" className={getButtonClass("J")} onClick={() => handleClick("J", "snare")}>
              <span className="text-2xl font-bold">J</span>
              <span className="text-xs">SNARE</span>
            </button>
            <button data-key="K" className={getButtonClass("K")} onClick={() => handleClick("K", "tink")}>
              <span className="text-2xl font-bold">K</span>
              <span className="text-xs">TINK</span>
            </button>
            <button data-key="L" className={getButtonClass("L")} onClick={() => handleClick("L", "tom")}>
              <span className="text-2xl font-bold">L</span>
              <span className="text-xs">TOM</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function playSound(sound: string) {
  const audio = new Audio(`/sounds/${sound}.wav`);
  audio.play();
}
