import AboutMe from "../sections/About Me/AboutMe.tsx";
import Hero from "../sections/Hero/Hero.tsx";
import Projects from "../sections/Projects/Projects.tsx";
import { useLayoutEffect } from "react";
// import gsap from "gsap";

function Home() {
  useLayoutEffect(() => {
    animate();
  });
  return (
    <>
      <Hero />
      <AboutMe />
      <div className="bg-background">
        <Projects />
      </div>
    </>
  );
}

function animate() {
  const el = document.querySelector("#Projects");
  if (!el) return;

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".pin-wrapper",
  //     start: "top top",

  //     pinSpacing: false,
  //     anticipatePin: 1,
  //   },
  // });
}

export default Home;
