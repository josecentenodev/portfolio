"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "../_components/Header";

export default function CssVariables() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".controls input");
    const imageContainer = document.querySelector('.image-container') as HTMLElement;

    function handleUpdate(e: Event) {
      const input = e.target as HTMLInputElement;
      const suffix = input.dataset.sizing || "";
      if (imageContainer) {
        imageContainer.style.setProperty(
          `--${input.name}`,
          input.value + suffix
        );
      }
    }

    // Establecer valores iniciales
    inputs.forEach((input: Element) => {
      const inputElement = input as HTMLInputElement;
      const suffix = inputElement.dataset.sizing || "";
      if (imageContainer) {
        imageContainer.style.setProperty(
          `--${inputElement.name}`,
          inputElement.value + suffix
        );
      }
    });

    inputs.forEach((input) => input.addEventListener("change", handleUpdate));
    inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

    return () => {
      inputs.forEach((input) => input.removeEventListener("change", handleUpdate));
      inputs.forEach((input) => input.removeEventListener("mousemove", handleUpdate));
    };
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header 
            title="Update CSS Variables with"
            highlightedText="JS"
            backLink={{
              href: "/javascript30",
              text: "Volver a los desafíos"
            }}
          />
          <div className="controls">
            <div className="controls__combo">
              <label htmlFor="spacing">Spacing:</label>
              <input
                id="spacing"
                type="range"
                name="spacing"
                min="10"
                max="200"
                defaultValue="10"
                data-sizing="px"
              />
            </div>
            <div className="controls__combo">
              <label htmlFor="blur">Blur:</label>
              <input
                id="blur"
                type="range"
                name="blur"
                min="0"
                max="25"
                defaultValue="10"
                data-sizing="px"
              />
            </div>
            <div className="controls__combo">
              <label htmlFor="base">Base Color</label>
              <input
                id="base"
                type="color"
                name="base"
                defaultValue="#ffc600"
              />
            </div>
          </div>
          <div className="image-container">
            <Image
              src="/merry.webp"
              alt="Imagen de prueba"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </main>
      <style>{`
        .image-container {
          --base: #ffc600;
          --spacing: 10px;
          --blur: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }

        .image {
          padding: var(--spacing);
          background: var(--base);
          filter: blur(var(--blur));
          max-width: 100%;
          height: auto;
        }

        .controls {
          margin: 2rem 0;
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .controls__combo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .controls__combo:last-child {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.7rem;
        }

        .controls__combo label {
          font-size: 1rem;
          color: #fff;
        }

        input[type="range"] {
          -webkit-appearance: none;
          width: 200px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          outline: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #212121;
          border-radius: 50%;
          cursor: pointer;
          transition: background .15s ease-in-out;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          background: #fff;
        }

        input[type="color"] {
          -webkit-appearance: none;
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="color"]::-webkit-color-swatch-wrapper {
          padding: 0;
        }

        input[type="color"]::-webkit-color-swatch {
          border: none;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
