import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      "#Projects",
      { borderRadius: "300px" },
      {
        borderRadius: "0px",
        scrollTrigger: {
          trigger: "#Projects",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: true,
        },
      }
    );

    const inner = document.getElementById("projects-inner");
    gsap.to(inner, {
      y: () => -(inner!.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: "#Projects",
        start: "top top",
        end: () => "+=" + (inner!.scrollHeight - window.innerHeight),
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      id="Projects"
      ref={ref}
      className="relative w-full h-dvh bg-gray-400 flex flex-col items-center pt-5 z-20 overflow-hidden"
    >
      <p className="font-title text-text text-title">Projects</p>
      <div
        id="projects-inner"
        className="relative will-change-transform min-h-[200dvh]"
      ></div>
    </div>
  );
}

export default Projects;
