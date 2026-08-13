import { projects } from "./allProjects.ts";
import ProjectTab from "./ProjectTab.tsx";

function GameDevelopmentTab() {
  return (
    <ProjectTab
      projects={projects.game}
      category="game"
    />
  );
}

export default GameDevelopmentTab;
