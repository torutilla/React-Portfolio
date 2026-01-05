import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";
import TabContainer from "../../components/layout/TabContainer.tsx";
import MobileDevelopmentTab from "./MobileDevelopmentTab.tsx";
import GameDevelopmentTab from "./GameDevelopmentTab.tsx";
import DesignTab from "./DesignTab.tsx";
import { SportsEsports, Smartphone, Brush } from "@mui/icons-material";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";
  const tabDefs = [
    {
      label: "Mobile Development",
      component: MobileDevelopmentTab,
      icon: Smartphone,
    },
    {
      label: "Game Development",
      component: GameDevelopmentTab,
      icon: SportsEsports,
    },
    { label: "Graphic & UI Design", component: DesignTab, icon: Brush },
  ];
  return (
    <div
      id={id}
      ref={ref}
      className="relative w-dvw h-screen inset-0 flex flex-col gap-3 items-center p-6 overflow-hidden md bg-background"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
      <TabContainer
        headingStyle={{ size: "sm" }}
        tabs={tabDefs.map(({ label, component: Comp, icon: Icon }) => ({
          heading: (
            <>
              <span className="md:hidden">
                <Icon></Icon>
              </span>
              <span className="hidden md:inline">{label}</span>
            </>
          ),
          content: <Comp />,
        }))}
      />
    </div>
  );
}

export default Projects;
