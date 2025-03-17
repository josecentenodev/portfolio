import TechnologyCategory from './TechnologyCategory';

interface TechCategory {
  name: string;
  technologies: string[];
  badgeColor: string;
}

export default function Technologies() {
  const techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Angular', 'Angular Material', 'Material UI', 'Astro', 'Axios', 'Mantine UI', 'Shadcn UI'],
      badgeColor: 'bg-blue-500'
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'tRPC', 'SQL Server', 'Django REST framework', 'Python'],
      badgeColor: 'bg-green-500'
    },
    {
      name: 'Herramientas',
      technologies: ['Git', 'Docker', 'AWS', 'Postman', 'Swagger', 'Jira', 'Figma', 'Visual Studio Code', 'Cursor',],
      badgeColor: 'bg-purple-500'
    },
    {
      name: 'Testing',
      technologies: ['Jest', 'Cypress'],
      badgeColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="glass-container p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Tecnologías con las que he trabajado</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {techCategories.map((category) => (
          <TechnologyCategory
            key={category.name}
            category={category.name}
            technologies={category.technologies}
            badgeColor={category.badgeColor}
          />
        ))}
      </div>
    </section>
  );
} 