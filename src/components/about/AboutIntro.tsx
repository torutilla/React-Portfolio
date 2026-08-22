import { getProfile } from "../../utils/about";
import WipeAnimator from "../animator/WipeAnimator.tsx";
import RevealAnimator from "../animator/RevealAnimator.tsx";
import me from "../../assets/images/me.jpg";

const AboutIntro = () => {
  const profile = getProfile();

  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary mb-5">
            About Me
          </p>

          <WipeAnimator direction="left">
            <h1 className="font-title text-title uppercase leading-[0.95]">
              {profile.role.split("&")[0]}
            </h1>
          </WipeAnimator>
          <WipeAnimator direction="top">
            <h1 className="font-title text-title uppercase leading-[0.95]">
              <span className="text-primary">&</span>
              {profile.role.split("&")[1]}
            </h1>
          </WipeAnimator>

          <div className="max-w-2xl mt-10">
            <RevealAnimator delay={0.4}>
              <p className="font-body text-lg md:text-xl text-text leading-relaxed whitespace-pre-line">
                {profile.content}
              </p>
            </RevealAnimator>
          </div>

          <RevealAnimator delay={0.6} className="flex flex-wrap gap-4 mt-8">
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
          </RevealAnimator>
        </div>

        <div className="flex justify-center lg:justify-end">
          <RevealAnimator delay={0.5} y={0} scale={0.85}>
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border border-primary/30" />

              <div className="absolute inset-5 rounded-full bg-surface border border-border/20 flex items-center justify-center overflow-hidden">
                <img
                  src={me}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </RevealAnimator>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
