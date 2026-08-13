import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function DesignTab() {
  return (
    <ProjectTab
      projects={projects.design}
      category="design"
    />
  );
}

export default DesignTab;
