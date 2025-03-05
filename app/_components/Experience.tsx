import ExperienceItem from './ExperienceItem';

interface ExperienceData {
  title: string;
  period: string;
  activities: string[];
}

interface ExperienceProps {
  experiences: ExperienceData[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="glass-container p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Experiencia Profesional</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            period={experience.period}
            activities={experience.activities}
          />
        ))}
      </div>
    </section>
  );
} 