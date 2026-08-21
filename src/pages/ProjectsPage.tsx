import Projects from "../sections/Projects/Projects.tsx";

function ProjectsPage() {
  const id = "ProjectsPage";
  return (
    <div className="pt-24 bg-background">
      <Projects />
    </div>
    // <div
    //   id={id}
    //   className="relative w-dvw min-h-screen inset-0 flex flex-col gap-3 items-center pt-24 px-6 pb-6 overflow-hidden"
    // >
    //   <TitleText text="PROJECTS" trigger={`#${id}`} />

    //   <TabContainer
    //     dynamicHeight={true}
    //     headingStyle={{ size: "sm" }}
    //     tabs={PROJECT_TAB_DEFS.map(({ key, label, icon: Icon }) => ({
    //       heading: (
    //         <>
    //           <span className="lg:hidden">
    //             <Icon />
    //           </span>
    //           <span className="hidden lg:inline">{label}</span>
    //         </>
    //       ),
    //       content: <ProjectTab projects={getProjectsByCategory(key)} />,
    //     }))}
    //   />
    // </div>
  );
}

export default ProjectsPage;
