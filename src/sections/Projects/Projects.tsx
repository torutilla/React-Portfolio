import { useRef } from "react";
import TitleText from "../../components/common/texts/TitleText.tsx";
import TabContainer from "../../components/layout/TabContainer.tsx";
import { PROJECT_TAB_DEFS } from "./projectTabDefs.tsx";

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const id = "Projects";
  return (
    <div
      id={id}
      ref={ref}
      className="relative w-dvw min-h-screen inset-0 flex flex-col gap-3 items-center p-6 overflow-hidden md bg-background"
    >
      <TitleText text="PROJECTS" trigger={`#${id}`} />
      <TabContainer
        dynamicHeight={true}
        headingStyle={{ size: "sm" }}
        tabs={PROJECT_TAB_DEFS.map(({ label, component: Comp, icon: Icon }) => ({
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
