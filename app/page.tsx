import NavBar from "./_components/NavBar";
import Profile from "./_components/Profile";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies";
import Experience from "./_components/Experience";

const experienceData = [
  {
    title: "Desarrollador Full Stack",
    period: "Abril 2024 - Actualidad",
    activities: [
      "Desde el año pasado hasta hoy estoy trabajando en distintos proyectos para Ypsilon, una empresa de desarrollo de software en Córdoba, Argentina",
      "Principalmente trabajo con Next.js, NextAuth, TailwindCSS, TypeScript, tRPC, PostgreSQL, Prisma, Docker, AWS",
      "Mejoré considerablemente la interfaz de uno de los proyectos de la empresa, que es una aplicación web de digitalización de documentos",
      "Construí una aplicación web para la gestión de clientes con usuarios y permisos de acceso a distintas aplicaciones de la empresa, brindándole la posibilidad de tener control sobre los clientes y sus aplicaciones, también senté las bases monitorear el uso de las aplicaciones",
      "Éste año 2025 comencé con un gran desafío: el desarrollo de una aplicación web para el gobierno de la provincia de Córdoba, Argentina, que es una aplicación web para la gestión de solicitudes de servicios de los ciudadanos",
      "Tuve que adecuarme a un nuevo stack de tecnologías: Angular, Angular Material, ahora utilizo Angular CLI para crear components, services, modules, etc.",
      "Mi enfoque principal es escribir CLEAN CODE, teniendo en cuenta también SOLID principles, DRY principles, KISS principle, etc.",
      "Intento seguir los principios de CLEAN ARCHITECTURE, para que la aplicación sea fácil de mantener y escalable",
    ],
  },
  {
    title: "Desarrollador Frontend",
    period: "enero 2024 - marzo 2024",
    activities: [
      "Desarrollé una aplicación web de gestión de usuarios utilizando React con Vite, TypeScript y TailwindCSS para una organización sin fines de lucro: AWAQ ONGD - Madrid, España",
      "Implementé una interfaz de usuario intuitiva y fácil de usar",
      "Integré con la API hecha en Node.js para la gestión de usuarios",
      "Desarrollé un sistema de autenticación con JWT y encriptación de contraseñas",
      "Utilicé React Router para la navegación entre las distintas vistas de la aplicación tanto para el usuario como para el administrador",
      "El diseño de la aplicación fue realizado con Figma, no tuve participación en el diseño pero me encargué de implementarlo",
    ],
  },
  {
    title: "Desarrollador Frontend",
    period: "2022 - 2023",
    activities: [
      "Estuve a cargo del desarrollo e implementación de características clave en un proyecto inspirado en GLPI",
      "Utilicé TypeScript, React, TailwindCSS, Material UI, Axios y Django REST framework",
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
