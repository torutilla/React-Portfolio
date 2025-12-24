import Background from "../components/Background.tsx";
import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";

function Home() {
  return (
    <>
      <Background />
      <Hero />
      <Projects />
      <AboutMe />
    </>
  );
}

export default Home;
