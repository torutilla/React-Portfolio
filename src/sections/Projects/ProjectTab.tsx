import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/layout/ProjectCard.tsx";
import type { Project } from "../../utils/projects.ts";

type ProjectTabProps = {
  projects: Project[];
};
function ProjectTab({ projects }: ProjectTabProps) {
  const navigate = useNavigate();
  return (
    <div className={`w-full text-text grid mobile-xl:grid-cols-2 gap-3`}>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() =>
              navigate(`/projects/${project.category}/${project.id}`)
            }
          />
        );
      })}
    </div>
  );
}

export default ProjectTab;
