import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
    </>
  );
}

export default Home;
