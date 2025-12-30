import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";

  return (
    <div
      id={id}
      ref={ref}
      className="relative w-full h-dvh inset-0 flex flex-col items-center pt-5 overflow-hidden md bg-background"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
    </div>
  );
}

export default Projects;
