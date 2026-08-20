import AboutIntro from "../components/about/AboutIntro.tsx";
import Experience from "../components/about/Experience.tsx";
import TechSkills from "../components/about/TechSkills.tsx";
import Certifications from "../components/about/Certifications.tsx";

function About() {
  return (
    <main className="bg-background text-text">
      <AboutIntro />
      <Experience />
      <TechSkills />
      <Certifications />
    </main>
  );
}

export default About;
