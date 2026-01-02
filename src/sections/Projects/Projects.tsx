import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";
import TabContainer from "../../components/layout/TabContainer.tsx";
import MobileDevelopmentTab from "./MobileDevelopmentTab.tsx";
import GameDevelopmentTab from "./GameDevelopmentTab.tsx";
import DesignTab from "./DesignTab.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";
  return (
    <div
      id={id}
      ref={ref}
      className="relative w-dvw h-dvh inset-0 flex flex-col items-center pt-5 overflow-hidden md bg-background"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
      <TabContainer
        tabs={[
          { heading: "Mobile Development", content: <MobileDevelopmentTab /> },
          { heading: "Game Development", content: <GameDevelopmentTab /> },
          { heading: "Graphic & UI Design", content: <DesignTab /> },
        ]}
      />
    </div>
  );
}

export default Projects;
