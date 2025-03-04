import Profile from './_components/Profile';
import Technologies from './_components/Technologies';
import Experience from './_components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <Profile />
        <Technologies />
        <Experience />
      </main>
    </div>
  );
}
