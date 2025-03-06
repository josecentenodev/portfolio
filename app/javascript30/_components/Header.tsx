import Link from "next/link";

export default function Header() {
  return (
    <div className="glass-container p-8 mb-8">
      <Link
        href="/"
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
        Volver al inicio
      </Link>
      <h1 className="text-4xl font-bold mb-4">JavaScript30 Challenge</h1>
      <p className="text-gray-300">
        Esta es una adaptación a React de mi viaje a través del desafío de 30 días de
        JavaScript de Wes Bos. Una colección de proyectos divertidos y creativos
        que me ayudaron a mejorar mis habilidades en JavaScript vanilla.
      </p>
    </div>
  );
}
