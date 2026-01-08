import type { ProjectDescription } from "../../components/layout/ProjectCard.tsx";
import Bukqueue from "../../assets/images/me.jpg";

export const projects: Record<string, ProjectDescription[]> = {
    game: [
    {
        name: "Bow and Arrow (Recreation)",
        date: "2025",
        techStack: ["Godot"],
        imgSrc: Bukqueue,
    },
    {
        name: "Action RPG",
        date: "2025",
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
    design: [
    {
        name: "Mobile Booking / Taxi App for Trike Vehicle (Bukqueue)",
        date: "2024",
        techStack: ["Figma"],
        imgSrc: Bukqueue,
    },
    {
        name: "ShopUs",
        date: "2023",
        techStack: ["Figma"],
        imgSrc: Bukqueue,
    },
    {
        name: "Meraki Tattoo",
        date: "2023",
        techStack: ["Adobe Illustrator", "Adobe InDesign"],
        imgSrc: Bukqueue,
    },
    {
        name: "Jen Sofia",
        date: "2023",
        techStack: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
        imgSrc: Bukqueue,
    },
    {
        name: "Busy Kitchen",
        date: "2020",
        techStack: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
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
