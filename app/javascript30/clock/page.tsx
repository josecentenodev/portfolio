"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/_components/Header";

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="JS and CSS Clock"
            description="Un reloj analógico estilizado inspirado en Roronoa Zoro"
            backLink={{
              href: "/javascript30",
              text: "Volver a los desafíos",
            }}
          />

          <div className="clock-container">
            <div className="zoro-bg"></div>
            <div className="clock">
              <div className="clock-face">
                <div
                  className="hand hour-hand"
                  style={{
                    transform: `rotate(${hour * 30 + minute / 2}deg)`,
                  }}
                ></div>
                <div
                  className="hand minute-hand"
                  style={{
                    transform: `rotate(${minute * 6}deg)`,
                  }}
                ></div>
                <div
                  className="hand second-hand"
                  style={{
                    transform: `rotate(${second * 6}deg)`,
                  }}
                ></div>
                <div className="clock-center"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .clock-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }

        .zoro-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/zoro.webp");
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          filter: grayscale(50%);
        }

        .clock {
          width: 300px;
          height: 300px;
          border: 20px solid rgba(47, 214, 111, 0.15);
          border-radius: 50%;
          position: relative;
          box-shadow: 0 0 0 4px rgba(47, 214, 111, 0.1),
            inset 0 0 0 3px rgba(47, 214, 111, 0.2), inset 0 0 10px black,
            0 0 10px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(5px);
        }

        .clock-face {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(-3px);
        }

        .hand {
          width: 50%;
          height: 6px;
          background: #2fd66f;
          position: absolute;
          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
        }

        .hour-hand {
          width: 35%;
          left: 15%;
          height: 8px;
          background: #25a857;
        }

        .minute-hand {
          height: 6px;
          background: #2fd66f;
        }

        .second-hand {
          height: 4px;
          background: #39ff87;
          box-shadow: 0 0 5px #39ff87;
        }

        .clock-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2fd66f;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 5px #39ff87;
        }
      `}</style>
    </div>
  );
}
