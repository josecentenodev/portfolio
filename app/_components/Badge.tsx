interface BadgeProps {
  text: string;
  backgroundColor?: string;
}

export default function Badge({ text, backgroundColor = 'bg-blue-500' }: BadgeProps) {
  return (
    <span className={`px-3 py-1 ${backgroundColor} rounded-full text-sm text-white`}>
      {text}
    </span>
  );
} 