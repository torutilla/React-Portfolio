import { useEffect, useRef } from "react";
import TechStackButton from "./TechStackButton.tsx";
import gsap from "gsap";
import FillButton from "../common/buttons/FillButton.tsx";

export type ProjectDescription = {
  imgSrc: string;
  name: string;
  date: string;
  techStack: string[];
};
type CardProps = {
  project: ProjectDescription;
  onClick?: () => void;
};
function ProjectCard({ project, onClick }: CardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const blurdivRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);
  useEffect(() => {
    gsap.set(blurdivRef.current, { opacity: 0 });
    gsap.set(stackRef.current, { yPercent: 100 });
    tl.current = gsap.timeline();
  }, []);
  const onHover = () => {
    tl.current
      ?.to(imgRef.current, {
        scale: 1.05,
        ease: "power4.in",
      })
      .to(blurdivRef.current, { opacity: 1 }, "<")
      .to(stackRef.current, { yPercent: 0 }, "<");
  };
  const onHoverOut = () => {
    tl.current
      ?.to(imgRef.current, { scale: 1, ease: "power3.out" })
      .to(blurdivRef.current, { opacity: 0 }, "<")
      .to(stackRef.current, { yPercent: 100 }, "<");
  };
  return (
    <div className="relative w-full h-full rounded-lg overflow-clip cursor-pointer">
      <div className="overflow-clip">
        <img
          ref={imgRef}
          src={project.imgSrc}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        onClick={onClick}
        onMouseLeave={onHoverOut}
        onMouseEnter={onHover}
        ref={blurdivRef}
        className="absolute inset-0 h-full w-full bg-background/40 backdrop-blur-xs flex justify-center items-center"
      >
        <FillButton onclick={onClick}>See Project</FillButton>
      </div>
      <div
        ref={stackRef}
        className="absolute bottom-0 p-3 hidden md:flex flex-col gap-1"
      >
        <p className="font-title text-text text-md">{project.name}</p>
        <p className="font-subtitle text-text font-extralight">
          {project.date}
        </p>
        <div className="flex gap-1">
          {project.techStack.map((stack, index) => {
            return <TechStackButton key={index} heading={stack} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
