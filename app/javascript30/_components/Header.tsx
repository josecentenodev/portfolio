import Link from "next/link";

interface HeaderProps {
  title: string;
  highlightedText?: string;
  description?: string;
  backLink?: {
    href: string;
    text: string;
  };
}

export default function Header({ 
  title, 
  highlightedText, 
  description,
  backLink 
}: HeaderProps) {
  return (
    <>
      {backLink && (
        <Link
          href={backLink.href}
          className="inline-flex items-center text-sm hover:text-white transition-colors mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {backLink.text}
        </Link>
      )}
      <h1 className="text-4xl font-bold mb-4">
        {title} {highlightedText && <span className="text-[#FED01E]">{highlightedText}</span>}
      </h1>
      {description && (
        <p className="text-gray-300 mb-8">{description}</p>
      )}
    </>
  );
} 