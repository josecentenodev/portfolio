import NavBar from "./_components/NavBar";
import Profile from "./_components/Profile";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies";
import Experience from "./_components/Experience";

const experienceData = [
  {
    title: "Desarrollador Frontend",
    period: "enero 2024 - marzo 2024",
    activities: [
      "Desarrollé una aplicación web de gestión de usuarios utilizando React con Vite, TypeScript y TailwindCSS para una organización ",
      "Implementé una interfaz de usuario intuitiva y fácil de usar",
      "Integré Firebase para la autenticación y el almacenamiento de datos",
    ],
  },
  {
    title: "Desarrollador Frontend",
    period: "2022 - 2023",
    activities: [
      "Estuve a cargo del desarrollo e implementación de características clave en una aplicación inspirada en GLPI",
      "Utilicé tecnologías de vanguardia como TypeScript, React, TailwindCSS, Material UI, Axios y Django REST framework",
      "Aseguré experiencia de usuario fluida y funcionalidad sólida en toda la aplicación.",
      "Tuve compromiso con las mejores prácticas de desarrollo SOLID.",
      "Resolví de manera proactiva cada desafío técnico",
      "Modelo de trabajo SCRUM",
    ],
  },
  {
    title: "Consultor Informático",
    period: "2017 - 2023",
    activities: [
      "Capacité a los clientes en las distintas áreas de la aplicación",
      "Recibí consultas y he resuelto problemas de manera proactiva",
      "Lleve a cabo la generación de consultas de base de datos (SQL) según las necesidades del cliente",
      "Extraje, modifiqué, procesé y transfirí datos (SQL)",
      "Restituí y corregí la base de datos (SQL)",
      "Desarrollé y modificé fórmulas lógicas (VisualBasic)",
      "Parametrizé e implementé funcionalidades",
    ],
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
