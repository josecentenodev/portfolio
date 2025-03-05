interface ExperienceItemProps {
  title: string;
  period: string;
  activities: string[];
}

export default function ExperienceItem({ title, period, activities }: ExperienceItemProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm text-gray-300">{period}</span>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
} 