import type { ProjectDescription } from "../../components/layout/ProjectCard.tsx";
import ProjectCard from "../../components/layout/ProjectCard.tsx";

type ProjectTabProps = {
  projects: ProjectDescription[];
};
function ProjectTab({ projects }: ProjectTabProps) {
  return (
    <div className={`w-full text-text grid mobile-xl:grid-cols-2 gap-3`}>
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </div>
  );
}

export default ProjectTab;
