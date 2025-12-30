import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";

  return (
    <div
      id={id}
      ref={ref}
      className="absolute w-full h-[200dvh]  flex flex-col items-center pt-5 z-20 overflow-hidden md"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
      <div
        id="projects-inner"
        className="relative will-change-transform min-h-[200dvh]"
      ></div>
    </div>
  );
}

export default Projects;
