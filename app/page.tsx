import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-32 h-32 sm:w-52 sm:h-52">
              <Image
                src="/yo.webp"
                alt="Foto de perfil"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">José Centeno</h1>
              <p className="text-lg text-gray-200 mb-4">
                Desarrollador Web Full Stack
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/josecentenodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/josecentenodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="glass-container p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Ejemplo de proyecto */}
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold mb-2">Nombre del Proyecto</h3>
              <p className="text-gray-300 mb-4">
                Descripción corta del proyecto
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-full text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
