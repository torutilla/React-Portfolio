import { useEffect, useRef } from "react";
import TechStackButton from "./TechStackButton.tsx";
import gsap from "gsap";
import type { Project } from "../../utils/projects.ts";

export type ProjectDescription = {
  imgSrc: string;
  name: string;
  date: string;
  techStack: string[];
  slug?: string;
  content?: string;
  screenshots?: string[];
};
type CardProps = {
  project: Project;
  onClick?: () => void;
};
function ProjectCard({ project, onClick }: CardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const blurdivRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);
  useEffect(() => {
    // gsap.set(blurdivRef.current, { opacity: 0 });
    // gsap.set(stackRef.current, { yPercent: 100 });
    tl.current = gsap.timeline();
  }, []);
  const onHover = () => {
    tl.current?.to(imgRef.current, {
      scale: 1.05,
      ease: "power3.in",
      duration: 0.3,
    });
  };
  const onHoverOut = () => {
    tl.current?.to(imgRef.current, { scale: 1, ease: "power3.out" });
  };
  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      className="relative w-full rounded-lg overflow-clip cursor-pointer"
    >
      <div className="overflow-clip aspect-video">
        <img
          ref={imgRef}
          src={project.cover}
          alt={project.name}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div
        ref={blurdivRef}
        className="absolute inset-x-0 bottom-0 h-fit bg-background/40 backdrop-blur-xs flex rounded-b-lg"
      >
        <div ref={stackRef} className="p-3 flex flex-col gap-1">
          <p className="font-title text-text text-xs md:text-md">
            {project.name}
          </p>
          <p className="font-subtitle text-text font-extralight">
            {project.date}
          </p>
          <div className="hidden md:flex gap-1">
            {project.techStack.map((stack, index) => {
              return <TechStackButton key={index} heading={stack} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
