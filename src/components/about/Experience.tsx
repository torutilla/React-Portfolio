import {
  getExperiencesByCategory,
  type Experience as ExperienceData,
} from "../../utils/about";

interface ExperienceGroupProps {
  title: string;
  experiences: ExperienceData[];
}

const ExperienceGroup = ({ title, experiences }: ExperienceGroupProps) => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="font-subtitle text-2xl">{title}</h3>

        <div className="w-12 h-1 bg-primary mt-3" />
      </div>

      <div className="space-y-10">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="border-l border-border/20 pl-6 relative"
          >
            <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />

            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
              {experience.date}
            </p>

            <h4 className="font-subtitle text-xl md:text-2xl">
              {experience.role}
            </h4>

            <p className="font-body text-secondary-text mt-1">
              {experience.company}
              {experience.location && ` · ${experience.location}`}
            </p>

            <p className="font-body text-secondary-text leading-relaxed mt-4 max-w-2xl">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const development = getExperiencesByCategory("development");

  const design = getExperiencesByCategory("design");

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Experience
          </p>

          <h2 className="font-title text-3xl md:text-5xl uppercase mt-3">
            Where I've Worked
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ExperienceGroup title="Development" experiences={development} />

          <ExperienceGroup title="Design" experiences={design} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
