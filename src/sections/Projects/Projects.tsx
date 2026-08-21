import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";
import TabContainer from "../../components/layout/TabContainer.tsx";
import { PROJECT_TAB_DEFS } from "./projectTabDefs.tsx";
import ProjectTab from "./ProjectTab.tsx";
import { getProjectsByCategory } from "../../utils/projects.ts";

function Projects() {
  const id = "Projects";
  return (
    <div
      id={id}
      className="relative w-dvw  inset-0 flex flex-col gap-3 items-center p-6 overflow-hidden h-fit"
    >
      <TitleText text="PROJECTS" override={{ trigger: `#${id}` }} />
      <div className="lg:mb-10">
        <TabContainer
          dynamicHeight={true}
          headingStyle={{ size: "sm" }}
          tabs={PROJECT_TAB_DEFS.map(({ key, label, icon: Icon }) => ({
            heading: (
              <>
                <span className="lg:hidden">
                  <Icon></Icon>
                </span>
                <span className="hidden lg:inline">{label}</span>
              </>
            ),
            content: <ProjectTab projects={getProjectsByCategory(key)} />,
          }))}
        />
      </div>
    </div>
  );
}

export default Projects;
