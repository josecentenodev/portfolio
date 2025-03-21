export default function NavBar() {
  return (
    <nav className="glass-container p-4 mb-8 sticky top-4 max-w-4xl mx-auto z-10">
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {/* Links internos solo visibles en desktop */}
        <li className="hidden sm:block">
          <a href="#inicio" className="hover:text-[#FF0000] hover:scale-110 transform transition-all duration-300">
            Inicio
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#sobre-mi" className="hover:text-[#00FF00] hover:scale-110 transform transition-all duration-300">
            Sobre Mí
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#tecnologias" className="hover:text-[#FFA500] hover:scale-110 transform transition-all duration-300">
            Tecnologías
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#experiencia" className="hover:text-[#87CEEB] hover:scale-110 transform transition-all duration-300">
            Experiencia
          </a>
        </li>
        <li className="hidden sm:block border-l h-6 border-gray-500" aria-hidden="true" />
        
        {/* Links externos siempre visibles */}
        <li className="w-full sm:w-auto text-center">
          <a 
            href="/javascript30" 
            className="group flex items-center justify-center space-x-2 hover:text-[#FFD700] hover:scale-110 transform transition-all duration-300"
          >
            <span>JavaScript30</span>
            <svg 
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </li>
        <li className="w-full sm:w-auto text-center">
          <a 
            href="/myprojects" 
            className="group flex items-center justify-center space-x-2 hover:text-[#FF69B4] hover:scale-110 transform transition-all duration-300"
          >
            <span>Mis Proyectos</span>
            <svg 
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}