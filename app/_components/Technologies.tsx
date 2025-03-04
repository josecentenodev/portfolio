export default function Technologies() {
  const techCategories = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    Backend: ['Node.js', 'Express', 'MongoDB'],
    Herramientas: ['Git', 'Docker', 'AWS'],
    Testing: ['Jest', 'Cypress']
  };

  return (
    <section className="glass-container p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Tecnologías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(techCategories).map(([category, techs]) => (
          <div key={category} className="bg-white/5 p-4 rounded-lg text-center">
            <h3 className="font-bold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {techs.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 