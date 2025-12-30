import gsap from "gsap";
import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Contact from "../sections/Contact/Contact.tsx";

function Home() {
  useLayoutEffect(() => {
    // animate();
  });
  return (
    <>
      <Hero />
      <div className="animation-container relative min-h-screen z-2">
        <Projects />
        <AboutMe />
      </div>
      <Contact />
    </>
  );
}

function animate() {
  const tl = gsap.timeline();
  tl.fromTo("#About", { xPercent: 0 }, { xPercent: 100 });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".animation-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
  });
}

export default Home;
