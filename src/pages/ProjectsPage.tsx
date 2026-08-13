import { ArrowBack } from "@mui/icons-material";
import TitleText from "../components/common/texts/TitleText.tsx";
import TabContainer from "../components/layout/TabContainer.tsx";
import type { ProjectCategory } from "../lib/projectRoutes.ts";
import { navigateToHome } from "../lib/projectRoutes.ts";
import {
  getTabIndexForCategory,
  PROJECT_TAB_DEFS,
} from "../sections/Projects/projectTabDefs.tsx";

type ProjectsPageProps = {
  category: ProjectCategory;
};

function ProjectsPage({ category }: ProjectsPageProps) {
  const id = "ProjectsPage";

  return (
    <div
      id={id}
      className="relative w-dvw min-h-screen inset-0 flex flex-col gap-3 items-center pt-24 px-6 pb-6 overflow-hidden bg-background"
    >
      <button
        type="button"
        onClick={navigateToHome}
        className="self-start flex items-center gap-2 text-text/70 hover:text-text transition-colors cursor-pointer"
      >
        <ArrowBack fontSize="small" />
        <span className="font-body text-sm">Back to Home</span>
      </button>

      <TitleText text="PROJECTS" trigger={`#${id}`} />

      <TabContainer
        dynamicHeight={true}
        headingStyle={{ size: "sm" }}
        initialTabIndex={getTabIndexForCategory(category)}
        tabs={PROJECT_TAB_DEFS.map(({ label, component: Comp, icon: Icon }) => ({
          heading: (
            <>
              <span className="lg:hidden">
                <Icon />
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

export default ProjectsPage;
