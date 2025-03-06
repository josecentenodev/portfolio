import Challenge from './Challenge';

interface ChallengeData {
  day: number;
  title: string;
  description: string;
  demo: string;
  tags: string[];
}

interface ChallengeGridProps {
  challenges: ChallengeData[];
}

export default function ChallengeGrid({ challenges }: ChallengeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {challenges.map((challenge) => (
        <Challenge key={challenge.day} {...challenge} />
      ))}
    </div>
  );
} 