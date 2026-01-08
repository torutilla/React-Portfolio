import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function MobileDevelopmentTab() {
  return <ProjectTab projects={projects.mobile} />;
}

export default MobileDevelopmentTab;
