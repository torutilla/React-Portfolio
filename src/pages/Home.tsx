import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";
import { useLayoutEffect } from "react";
import Contact from "../sections/Contact/Contact.tsx";
import gsap from "gsap";

function Home() {
  useLayoutEffect(() => {
    animate();
  });
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />

      <Contact />
    </>
  );
}

function animate() {
  const el = document.querySelector("#Projects");
  if (!el) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-wrapper",
      start: "top top",

      pinSpacing: false,
      anticipatePin: 1,
    },
  });
}

export default Home;
