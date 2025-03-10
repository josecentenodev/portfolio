import Header from "./_components/Header";
import ChallengeGrid from "./_components/ChallengeGrid";

const challenges = [
  {
    day: 1,
    title: "JavaScript Drum Kit",
    description: "Un kit de batería interactivo usando eventos de teclado",
    demo: "/javascript30/drum-kit",
    tags: ["DOM", "Audio", "KeyEvents"],
  },
  {
    day: 2,
    title: "JS and CSS Clock",
    description: "Un reloj analógico interactivo usando JavaScript y CSS",
    demo: "/javascript30/clock",
    tags: ["JavaScript", "CSS", "Clock"],
  },
  {
    day: 3,
    title: "CSS Variables",
    description:
      "Experimenta con variables CSS para crear un efecto de transición",
    demo: "/javascript30/css-variables",
    tags: ["CSS", "Variables"],
  },

  // Añadir más desafíos aquí
];

export default function JavaScript30Page() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="JavaScript30 Challenge"
            description="Esta es una adaptación a React de mi viaje a través del desafío de 30 días de JavaScript de Wes Bos. Una colección de proyectos divertidos y creativos que me ayudaron a mejorar mis habilidades en JavaScript vanilla."
            backLink={{
              href: "/",
              text: "Volver al inicio",
            }}
          />
        </div>
        <ChallengeGrid challenges={challenges} />
      </main>
    </div>
  );
}
