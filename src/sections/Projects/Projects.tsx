import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "#Projects";
  useLayoutEffect(() => {
    gsap.fromTo(
      id,
      { borderRadius: window.innerWidth >= 768 ? "300px" : "40px" },
      {
        borderRadius: "0px",
        scrollTrigger: {
          trigger: id,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      }
    );

    const inner = document.getElementById("projects-inner");
    gsap.to(inner, {
      y: () => -(inner!.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: id,
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
      className="relative w-full h-[200dvh]  flex flex-col items-center pt-5 z-20 overflow-hidden md"
    >
      <TitleText text="PROJECTS" triggerTarget={id} />
      <div
        id="projects-inner"
        className="relative will-change-transform min-h-[200dvh]"
      ></div>
    </div>
  );
}

export default Projects;
