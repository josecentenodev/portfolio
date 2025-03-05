import NavBar from './_components/NavBar';
import Profile from './_components/Profile';
import AboutMe from './_components/AboutMe';
import Technologies from './_components/Technologies';
import Experience from './_components/Experience';

const experienceData = [
  {
    title: "Desarrollador Full Stack Freelance",
    period: "2022 - Presente",
    activities: [
      "Desarrollo de aplicaciones web completas para diversos clientes",
      "Implementación de soluciones escalables y mantenibles",
      "Optimización de rendimiento y experiencia de usuario",
      "Colaboración directa con clientes para alcanzar sus objetivos"
    ]
  },
  // Puedes agregar más experiencias aquí
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <NavBar />
      <main className="max-w-4xl mx-auto">
        <div id="inicio">
          <Profile />
        </div>
        <AboutMe />
        <div id="tecnologias">
          <Technologies />
        </div>
        <div id="experiencia">
          <Experience experiences={experienceData} />
        </div>
      </main>
    </div>
  );
}
