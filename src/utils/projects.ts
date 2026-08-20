import fm from 'front-matter';

export type ProjectCategory = string | "mobile" | "game" | "web" | "design";
export interface ProjectFrontmatter {
    id: string;
    name: string;
    date: string;
    cover: string;
    category: ProjectCategory;
    techStack: string[];
}

export interface Project extends ProjectFrontmatter {
    content: string;
}
const projectFiles = import.meta.glob(
    "/src/content/projects/*.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

const coverImages = import.meta.glob(
    "/src/assets/images/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

export const projects: Project[] = Object.values(projectFiles).map(
    (file) => {
        const { attributes: data, body: content } = fm<ProjectFrontmatter>(file as string);

        return {
            id: data.id,
            name: data.name,
            date: data.date,
            cover: getCoverImage(data.cover),
            category: data.category,
            techStack: data.techStack,
            content,
        };
    }
);

export function getProject(id: string) {
    return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: ProjectCategory) {
    return projects.filter((project) => project.category === category);
}

function getCoverImage(filename: string): string {
    const path = `/src/assets/images/${filename}`;

    return coverImages[path] as string;
}