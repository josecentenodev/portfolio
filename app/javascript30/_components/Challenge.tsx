import Badge from '../../_components/Badge';

interface ChallengeProps {
  day: number;
  title: string;
  description: string;
  demo: string;
  tags: string[];
}

// Array of possible background colors for badges
const badgeColors = [
  'bg-blue-600',
  'bg-green-600',
  'bg-purple-600',
  'bg-orange-600',
  'bg-pink-600',
  'bg-teal-600',
  'bg-indigo-600',
  'bg-red-600'
];

export default function Challenge({ day, title, description, demo, tags }: ChallengeProps) {
  // Function to get a random background color
  const getRandomColor = () => {
    return badgeColors[Math.floor(Math.random() * badgeColors.length)];
  };

  return (
    <div className="glass-container p-6 hover:scale-102 transition-transform">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-mono text-gray-400">Día {day}</span>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              text={tag}
              backgroundColor={getRandomColor()}
            />
          ))}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a 
        href={demo}
        className="inline-flex items-center text-sm hover:text-white transition-colors"
      >
        Ver demo
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  );
} 