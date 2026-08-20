import fm from "front-matter";

export interface Profile {
    name: string;
    role: string;
    location: string;
    email: string;
    avatar: string;
    content: string;
}

export interface Experience {
    category: "development" | "design";
    role: string;
    company: string;
    location: string;
    date: string;
    description: string;
}

export interface Skills {
    [category: string]: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    status: string;
}

const profileFiles = import.meta.glob(
    "/src/content/about/profile.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

const experienceFiles = import.meta.glob(
    "/src/content/about/experience.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

const skillsFiles = import.meta.glob(
    "/src/content/about/skills.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

const certificationFiles = import.meta.glob(
    "/src/content/about/certifications.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

const profileFile = Object.values(profileFiles)[0] as string;
const experienceFile = Object.values(experienceFiles)[0] as string;
const skillsFile = Object.values(skillsFiles)[0] as string;
const certificationFile = Object.values(certificationFiles)[0] as string;

const profileData = fm<Profile>(
    profileFile
);

const experienceData = fm<{
    experience: Experience[];
}>(experienceFile);

const skillsData = fm<{
    skills: Skills;
}>(skillsFile);

const certificationData = fm<{
    certifications: Certification[];
}>(certificationFile);

export const profile: Profile = {
    ...profileData.attributes,
    avatar: profileData.attributes.avatar,
    content: profileData.body,
};

export const experiences: Experience[] =
    experienceData.attributes.experience;

export const skills: Skills =
    skillsData.attributes.skills;

export const certifications: Certification[] =
    certificationData.attributes.certifications;


export function getProfile(): Profile {
    return profile;
}

export function getExperiences(): Experience[] {
    return experiences;
}

export function getExperiencesByCategory(
    category: Experience["category"]
): Experience[] {
    return experiences.filter(
        (experience) => experience.category === category
    );
}

export function getSkills(): Skills {
    return skills;
}

export function getCertifications(): Certification[] {
    return certifications;
}