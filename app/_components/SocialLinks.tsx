import Badge from "./Badge";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Badge
        text="GitHub"
        backgroundColor="bg-[#181717]"
        href="https://github.com/josecentenodev"
      />
      <Badge
        text="LinkedIn"
        backgroundColor="bg-[#0E76A8]"
        href="https://linkedin.com/in/josecentenodev"
      />
    </div>
  );
} 