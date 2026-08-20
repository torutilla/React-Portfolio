import { getProfile } from "../../utils/about";

const AboutIntro = () => {
  const profile = getProfile();

  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary mb-5">
            About Me
          </p>

          <h1 className="font-title text-title uppercase leading-[0.95]">
            {profile.role.split("&")[0]}
            <br />
            <span className="text-primary">&</span>
            {profile.role.split("&")[1]}
          </h1>

          <div className="max-w-2xl mt-10">
            <p className="font-body text-lg md:text-xl text-text leading-relaxed whitespace-pre-line">
              {profile.content}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary-text">
              {profile.location}
            </span>

            <span className="text-primary">•</span>

            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs uppercase tracking-widest text-secondary-text hover:text-primary transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full border border-primary/30" />

            <div className="absolute inset-5 rounded-full bg-surface border border-border/20 flex items-center justify-center overflow-hidden">
              <img
                src={profile.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-3 -right-3 px-3 py-2 bg-primary text-button-text font-mono text-xs uppercase tracking-wider">
              Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
