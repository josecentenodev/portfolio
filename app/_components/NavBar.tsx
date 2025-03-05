export default function NavBar() {
  return (
    <nav className="glass-container p-4 mb-8 sticky top-4 max-w-4xl mx-auto z-10">
      <ul className="flex justify-center space-x-6">
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
      </ul>
    </nav>
  );
} 