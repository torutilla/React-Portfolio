import AboutIntro from "../components/about/AboutIntro.tsx";
import Experience from "../components/about/Experience.tsx";
import TechSkills from "../components/about/TechSkills.tsx";
import Certifications from "../components/about/Certifications.tsx";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function About() {
  const mainRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power1.out" }
    );
  }, []);

  return (
    <main ref={mainRef} className="bg-background text-text">
      <AboutIntro />
      <Experience />
      <TechSkills />
      <Certifications />
    </main>
  );
}

export default About;
