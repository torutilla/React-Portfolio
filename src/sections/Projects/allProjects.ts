import type { ProjectDescription } from "../../components/layout/ProjectCard.tsx";
import Bukqueue from "../../assets/images/me.jpg";

export const projects: Record<string, ProjectDescription[]> = {
    game: [
    {
        name: "Mobile Booking / Taxi App for Trike Vehicle (Bukqueue)",
        date: "2024 - 2025",
        techStack: ["Godot"],
        imgSrc: Bukqueue,
    },
    ],
    web: [
    {
        name: "Interactive Resume",
        date: "2025",
        techStack: ["HTML", "CSS", "JavaScript"],
        imgSrc: Bukqueue,
    },
    ],
    gfx: [
    {
        name: "Busy Kitchen Logo",
        date: "2025",
        techStack: ["Adobe Photoshop", "Adobe InDesign"],
        imgSrc: Bukqueue,
    },
    ],
    mobile: [
    {
        name: "Mobile Booking / Taxi App for Trike Vehicle (Bukqueue)",
        date: "2024 - 2025",
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps"],
        imgSrc: Bukqueue,
    },
    {
        name: "Super Marknel Game",
        date: "2024",
        techStack: ["Flutter", "Dart", "Flame Engine"],
        imgSrc: Bukqueue,
    },
    ],
}
