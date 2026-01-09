import type { ProjectDescription } from "../../components/layout/ProjectCard.tsx";
import Bukqueue from "../../assets/images/bukqueue.jpg";
import Meraki from "../../assets/images/Meraki.png";
import BusyKitchen from "../../assets/images/BusyKitchen.jpg"
import SVDFarm from "../../assets/images/SVDFarm.jpg";
import BowArrow from "../../assets/images/Bow&Arrow.png";
import ActionRPG from "../../assets/images/ActionRPG.png";
import Jensofia from "../../assets/images/jensofia.jpg";
import Resume from "../../assets/images/Resume.png";

export const projects: Record<string, ProjectDescription[]> = {
    game: [
    {
        name: "Bow and Arrow (Recreation)",
        date: "2025",
        techStack: ["Godot"],
        imgSrc: BowArrow,
    },
    {
        name: "Action RPG",
        date: "2025",
        techStack: ["Godot"],
        imgSrc: ActionRPG,
    },
    ],
    web: [
    {
        name: "Interactive Resume",
        date: "2025",
        techStack: ["HTML", "CSS", "JavaScript"],
        imgSrc: Resume,
    },
    ],
    design: [
    {
        name: "Mobile Booking / Taxi App for Trike Vehicle (Bukqueue UI)",
        date: "2024",
        techStack: ["Figma"],
        imgSrc: Bukqueue,
    },
    {
        name: "Meraki Tattoo Logo",
        date: "2023",
        techStack: ["Illustrator", "InDesign"],
        imgSrc: Meraki,
    },
    {
        name: "Busy Kitchen Logo",
        date: "2020",
        techStack: ["Illustrator", "InDesign", "Photoshop"],
        imgSrc: BusyKitchen,
    },
    {
        name: "Jen Sofia",
        date: "2023",
        techStack: ["Illustrator", "InDesign", "Photoshop"],
        imgSrc: Jensofia,
    },
    {
        name: "SVD Farm Brochure",
        date: "2023",
        techStack: [ "InDesign", "Photoshop"],
        imgSrc: SVDFarm,
    },
    ],
    mobile: [
    {
        name: "Mobile Booking / Taxi App for Trike Vehicle (Bukqueue)",
        date: "2024 - 2025",
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps"],
        imgSrc: Bukqueue,
    },

    ],
}
