import { ArrowBack } from "@mui/icons-material";
import TechStackButton from "../components/layout/TechStackButton.tsx";
import { projects } from "../sections/Projects/allProjects.ts";
import type { ProjectCategory } from "../lib/projectRoutes.ts";
import {
  getProjectSlug,
  navigateToProjectsTab,
} from "../lib/projectRoutes.ts";

type ProjectDetailPageProps = {
  category: ProjectCategory;
  slug: string;
};

function ProjectDetailPage({ category, slug }: ProjectDetailPageProps) {
  const project = projects[category].find(
    (entry) => getProjectSlug(entry) === slug,
  );

  if (!project) {
    return (
      <div className="relative w-dvw min-h-screen flex flex-col gap-4 items-start pt-24 px-6 pb-6 bg-background text-text">
        <button
          type="button"
          onClick={() => navigateToProjectsTab(category)}
          className="flex items-center gap-2 text-text/70 hover:text-text transition-colors cursor-pointer"
        >
          <ArrowBack fontSize="small" />
          <span className="font-body text-sm">Back to Projects</span>
        </button>
        <p className="font-body text-secondary-text">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="relative w-dvw min-h-screen flex flex-col gap-6 items-center pt-24 px-6 pb-6 bg-background text-text">
      <button
        type="button"
        onClick={() => navigateToProjectsTab(category)}
        className="self-start flex items-center gap-2 text-text/70 hover:text-text transition-colors cursor-pointer"
      >
        <ArrowBack fontSize="small" />
        <span className="font-body text-sm">Back to Projects</span>
      </button>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="overflow-hidden rounded-lg aspect-video">
          <img
            src={project.imgSrc}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-title text-2xl md:text-3xl">{project.name}</h1>
          <p className="font-subtitle text-secondary-text font-extralight">
            {project.date}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((stack) => (
              <TechStackButton key={stack} heading={stack} />
            ))}
          </div>
        </div>

        <section className="flex flex-col gap-3 rounded-lg border border-white/20 bg-black/30 p-6">
          <h2 className="font-title text-lg">About this project</h2>
          {project.detailedDescription ? (
            <p className="font-body text-secondary-text leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </p>
          ) : (
            <div className="min-h-40 rounded-md border border-dashed border-white/15 bg-black/20 p-4">
              <p className="font-body text-placeholder-text italic">
                Add a detailed description for this project in{" "}
                <code className="text-text/80">allProjects.ts</code>.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
