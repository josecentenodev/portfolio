import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Profile() {
  return (
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
            Desarrollador Full Stack especializado en frontend
          </p>
          <p className="text-gray-300 mb-6">
            Con más de dos años de experiencia en desarrollo eficiente y escalable. 
            Dedicado a crear soluciones web robustas y mantenibles. 
            Disponible para nuevos proyectos y colaboraciones.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
} 