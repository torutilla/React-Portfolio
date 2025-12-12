import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";
import gsap from "gsap";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#Home", {
      scale: 0.8,
      scrollTrigger: {
        scrub: true,
        trigger: "#Projects",
      },
    }).to("#Projects", {
      yPercent: -100,
      scrollTrigger: {
        start: "bottom bottom",
        trigger: "#Home",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
    </>
  );
}

export default Home;
