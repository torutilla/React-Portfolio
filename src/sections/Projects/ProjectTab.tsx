import type { ProjectDescription } from "../../components/layout/ProjectCard.tsx";
import ProjectCard from "../../components/layout/ProjectCard.tsx";
import type { ProjectCategory } from "../../lib/projectRoutes.ts";
import {
  getProjectSlug,
  navigateToProject,
} from "../../lib/projectRoutes.ts";

type ProjectTabProps = {
  projects: ProjectDescription[];
  category: ProjectCategory;
};
function ProjectTab({ projects, category }: ProjectTabProps) {
  return (
    <div className={`w-full text-text grid mobile-xl:grid-cols-2 gap-3`}>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() =>
              navigateToProject(category, getProjectSlug(project))
            }
          />
        );
      })}
    </div>
  );
}

export default ProjectTab;
