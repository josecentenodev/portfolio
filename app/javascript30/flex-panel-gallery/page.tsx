"use client";

import { useState } from "react";
import Header from "../../_components/Header";

interface Panel {
  id: number;
  text: string[];
  backgroundImage: string;
}

export default function FlexPanelGallery() {
  const [openPanelId, setOpenPanelId] = useState<number | null>(null);

  const panels: Panel[] = [
    {
      id: 1,
      text: ["I Will", "Become", "Pirate King"],
      backgroundImage: "/luffy.webp",
    },
    {
      id: 2,
      text: ["Nothing", "Happened", "Here"],
      backgroundImage: "/zoro.webp",
    },
    {
      id: 3,
      text: ["If You", "Don't Risk", "Your Life"],
      backgroundImage: "/sanji.webp",
    },
    {
      id: 4,
      text: ["When Do", "People Die?", "When Forgotten"],
      backgroundImage: "/chopper.webp",
    },
    {
      id: 5,
      text: ["I Want", "To Live", "Take Me To Sea"],
      backgroundImage: "/robin.webp",
    },
  ];

  const handlePanelClick = (id: number) => {
    setOpenPanelId(openPanelId === id ? null : id);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Flex Panel Gallery"
            description="Toca los paneles para ver el texto"
            backLink={{
              href: "/javascript30",
              text: "Volver a JavaScript30",
            }}
          />

          <section className="container mx-auto px-4 py-8">
            <div className="flex min-h-[500px]">
              {panels.map((panel) => (
                <div
                  key={panel.id}
                  onClick={() => handlePanelClick(panel.id)}
                  className={`
                relative flex-1 flex flex-col items-center justify-center
                overflow-hidden cursor-pointer transition-all duration-700
                ${openPanelId === panel.id ? "flex-[5]" : "flex-[1]"}
              `}
                  style={{
                    backgroundImage: `url(${panel.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <p
                    className={`
                  transform transition-transform duration-700 text-2xl
                  ${
                    openPanelId === panel.id
                      ? "translate-y-0"
                      : "-translate-y-full"
                  }
                `}
                  >
                    {panel.text[0]}
                  </p>
                  <p className="text-4xl font-bold my-4">{panel.text[1]}</p>
                  <p
                    className={`
                  transform transition-transform duration-700 text-2xl
                  ${
                    openPanelId === panel.id
                      ? "translate-y-0"
                      : "translate-y-full"
                  }
                `}
                  >
                    {panel.text[2]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <style jsx>{`
        p {
          color: white;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          font-family: var(--font-geist-sans);
        }
      `}</style>
    </div>
  );
}
