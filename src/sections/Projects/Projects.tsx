import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";
import TabContainer from "../../components/layout/TabContainer.tsx";
import MobileDevelopmentTab from "./MobileDevelopmentTab.tsx";
import GameDevelopmentTab from "./GameDevelopmentTab.tsx";
import DesignTab from "./DesignTab.tsx";
import {
  SportsEsports,
  Smartphone,
  Brush,
  Language,
} from "@mui/icons-material";
import WebDevelopmentTab from "./WebDevelopmentTab.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";
  const tabDefs = [
    {
      label: "Game",
      component: GameDevelopmentTab,
      icon: SportsEsports,
    },
    {
      label: "Mobile",
      component: MobileDevelopmentTab,
      icon: Smartphone,
    },
    { label: "Web", component: WebDevelopmentTab, icon: Language },
    { label: "Graphics & UI", component: DesignTab, icon: Brush },
  ];
  return (
    <div
      id={id}
      ref={ref}
      className="relative w-dvw min-h-screen inset-0 flex flex-col gap-3 items-center p-6 overflow-hidden md bg-background"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
      <TabContainer
        headingStyle={{ size: "sm" }}
        tabs={tabDefs.map(({ label, component: Comp, icon: Icon }) => ({
          heading: (
            <>
              <span className="lg:hidden">
                <Icon></Icon>
              </span>
              <span className="hidden lg:inline">{label}</span>
            </>
          ),
          content: <Comp />,
        }))}
      />
    </div>
  );
}

export default Projects;
