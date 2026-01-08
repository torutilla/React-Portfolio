import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function GameDevelopmentTab() {
  return <ProjectTab projects={projects.game} />;
}

export default GameDevelopmentTab;
