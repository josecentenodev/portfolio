import Image from 'next/image';
import Header from '../_components/Header';


interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image?: string;
}

export default function MyProjects() {
  const projects: Project[] = [
    {
      title: "QuickTeams 🚀",
      description: "Generador de equipos aleatorios para partidas personalizadas de League of Legends. Utiliza Astro y TypeScript.",
      url: "https://teamradomizer.vercel.app",
      technologies: ["Astro", "Tailwind CSS", "TypeScript"],
      image: "/teamradomizer.webp"
    },
    {
      title: "Fernando Martinena Portfolio 📝",
      description: "Portfolio personal de Fernando Martinena, desarrollado con React, TypeScript, Tailwind CSS, Next.js, NextAuth, Uploadthing. Posee un dashboard para administrar el portfolio y una bandeja de entrada para contactar con el.",
      url: "https://fernandomartinena.vercel.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "NextAuth", "Uploadthing"],
      image: "/fernandomartinena.webp"
    },
    {
      title: "Animals 🐾",
      description: "App para ver fotos de animales. Utiliza React, TypeScript, Tailwind CSS, Next.js, Uploadthing, Clerk.",
      url: "https://animals-josecentenodev.vercel.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Uploadthing", "Clerk"],
      image: "/animals.webp"
    },
    {
      title: "Imaginify 🎨",
      description: "App para crear imágenes con IA. Utiliza React, TypeScript, Tailwind CSS, Next.js, Cloudinary, Clerk.",
      url: "https://saasimage.vercel.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Cloudinary", "Clerk"],
      image: "/imaginify.webp"
    },
    {
      title: "Promptopia 💡",
      description: "App para crear prompts y compartirlos. Utiliza React, TypeScript, Tailwind CSS, Next.js, Clerk.",
      url: "https://share-prompts-josecentenodev.vercel.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Clerk"],
      image: "/promptopia.webp"
    },
    {
      title: "Gif App 🎥",
      description: "App para buscar gifs. Utiliza React y Tailwind CSS. Fue mi primer proyecto con React.",
      url: "https://giffyapp-josecentenodev.vercel.app",
      technologies: ["React", "Tailwind CSS", "Giphy API"],
      image: "/giffy.webp"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Mis Proyectos"
            description="Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo web."
            backLink={{
              href: "/",
              text: "Volver al Inicio"
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="glass-container p-6 hover:scale-102 transition-all duration-300">
                  {project.image && (
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
