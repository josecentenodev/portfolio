import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Profile() {
  return (
    <div className="glass-container p-8 sm:p-10 mb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12">
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FED01E] via-yellow-400 to-amber-500 rounded-full blur opacity-60 group-hover:opacity-90 transition duration-300"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <Image
                src="/yo.webp"
                alt="José Centeno - Full Stack Developer"
                fill
                className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            José <span className="text-[#FED01E]">Centeno</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-6 font-medium">
            Desarrollador Full Stack especializado en frontend
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
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