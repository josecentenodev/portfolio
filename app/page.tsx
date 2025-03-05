import NavBar from './_components/NavBar';
import Profile from './_components/Profile';
import AboutMe from './_components/AboutMe';
import Technologies from './_components/Technologies';
import Experience from './_components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <NavBar />
      <main className="max-w-4xl mx-auto">
        <div id="inicio">
          <Profile />
        </div>
        <AboutMe />
        <div id="tecnologias">
          <Technologies />
        </div>
        <div id="experiencia">
          <Experience />
        </div>
      </main>
    </div>
  );
}
