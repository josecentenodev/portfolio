interface BadgeProps {
  text: string;
  backgroundColor?: string;
  href?: string;
}

export default function Badge({ text, backgroundColor = 'bg-blue-500', href }: BadgeProps) {
  const baseStyles = `px-3 py-1 ${backgroundColor} rounded-full text-sm text-white`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} hover:opacity-90 transition-opacity cursor-pointer`}
      >
        {text}
      </a>
    );
  }

  return (
    <span className={baseStyles}>
      {text}
    </span>
  );
} 