export default function NavBar() {
  return (
    <nav className="glass-container p-4 mb-8 sticky top-4 max-w-4xl mx-auto z-10">
      <ul className="flex justify-center items-center space-x-6">
        <li>
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
        </li>
        <li>
          <a href="#sobre-mi" className="hover:text-white transition-colors">
            Sobre Mí
          </a>
        </li>
        <li>
          <a href="#tecnologias" className="hover:text-white transition-colors">
            Tecnologías
          </a>
        </li>
        <li>
          <a href="#experiencia" className="hover:text-white transition-colors">
            Experiencia
          </a>
        </li>
        <li className="border-l h-6 border-gray-500" aria-hidden="true" />
        <li>
          <a 
            href="/javascript30" 
            className="group flex items-center space-x-2 hover:text-white transition-colors"
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
      </ul>
    </nav>
  );
} 