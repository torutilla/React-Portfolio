import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function WebDevelopmentTab() {
  return <ProjectTab projects={projects.web} />;
}

export default WebDevelopmentTab;
