import { getSkills } from "../../utils/about";
import TechStackButton from "../layout/TechStackButton.tsx";

const TechSkills = () => {
  const skills = getSkills();

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Skills
          </p>

          <h2 className="font-title text-3xl md:text-5xl uppercase mt-3">
            Technical Toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-background p-8 min-h-48">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <TechStackButton heading={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
