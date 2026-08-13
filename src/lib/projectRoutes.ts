import type { ProjectDescription } from "../components/layout/ProjectCard.tsx";

export type ProjectCategory = "mobile" | "game" | "web" | "design";

export const HOME_SECTIONS = ["Home", "About", "Projects", "Contact"] as const;
export type HomeSection = (typeof HOME_SECTIONS)[number];

export type AppRoute =
  | { type: "home"; section: HomeSection }
  | { type: "projects"; category: ProjectCategory }
  | { type: "project-detail"; category: ProjectCategory; slug: string };

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "mobile",
  "game",
  "web",
  "design",
];

export function isHomeSection(value: string): value is HomeSection {
  return HOME_SECTIONS.includes(value as HomeSection);
}

export function isProjectCategory(value: string): value is ProjectCategory {
  return PROJECT_CATEGORIES.includes(value as ProjectCategory);
}

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProjectSlug(project: ProjectDescription): string {
  return project.slug ?? toSlug(project.name);
}

export function parseHashRoute(hash: string): AppRoute {
  const cleaned = hash.replace(/^#/, "");

  if (cleaned.startsWith("/projects/")) {
    const parts = cleaned.slice("/projects/".length).split("/").filter(Boolean);
    const category = parts[0];

    if (isProjectCategory(category)) {
      if (parts[1]) {
        return { type: "project-detail", category, slug: parts[1] };
      }
      return { type: "projects", category };
    }
  }

  if (!cleaned) {
    return { type: "home", section: "Home" };
  }

  if (isHomeSection(cleaned)) {
    return { type: "home", section: cleaned };
  }

  return { type: "home", section: "Home" };
}

export function navigateToSection(section: HomeSection | `#${HomeSection}`) {
  const normalized = section.replace(/^#/, "") as HomeSection;
  window.location.hash = `#${normalized}`;
}

export function navigateToProjectsTab(category: ProjectCategory) {
  window.location.hash = `#/projects/${category}`;
}

export function navigateToProject(category: ProjectCategory, slug: string) {
  window.location.hash = `#/projects/${category}/${slug}`;
}

export function navigateToHome() {
  navigateToSection("Home");
}
