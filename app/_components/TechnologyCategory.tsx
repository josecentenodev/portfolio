import Badge from './Badge';

interface TechnologyCategoryProps {
  category: string;
  technologies: string[];
  badgeColor?: string;
}

export default function TechnologyCategory({ 
  category, 
  technologies, 
  badgeColor = 'bg-blue-500' 
}: TechnologyCategoryProps) {
  return (
    <div className="bg-white/5 p-4 rounded-lg text-center">
      <h3 className="font-bold mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {technologies.map(tech => (
          <Badge key={tech} text={tech} backgroundColor={badgeColor} />
        ))}
      </div>
    </div>
  );
} 