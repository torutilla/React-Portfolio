import ProjectCard from "../../components/layout/ProjectCard.tsx";
import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function MobileDevelopmentTab() {
  return (
    <ProjectTab>
      {projects.mobile.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </ProjectTab>
  );
}

export default MobileDevelopmentTab;
