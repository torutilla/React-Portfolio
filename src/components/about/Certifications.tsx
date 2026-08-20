import { getCertifications } from "../../utils/about";

const Certifications = () => {
  const certifications = getCertifications();

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            Certifications
          </p>

          <h2 className="font-title text-3xl md:text-5xl uppercase mt-3">
            Learning & Credentials
          </h2>
        </div>

        <div className="border-t border-border/20">
          {certifications.map((certification) => (
            <article
              key={`${certification.issuer}-${certification.name}`}
              className="py-6 border-b border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="font-subtitle text-lg md:text-xl">
                  {certification.name}
                </h3>

                <p className="font-body text-sm text-secondary-text mt-1">
                  {certification.issuer}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-secondary-text">
                  {certification.date}
                </span>

                <span
                  className={`px-3 py-1 border font-mono text-xs uppercase ${
                    certification.status === "Completed"
                      ? "border-primary/40 text-primary"
                      : "border-border/30 text-secondary-text"
                  }`}
                >
                  {certification.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
