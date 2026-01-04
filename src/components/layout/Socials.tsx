import { createRef, useLayoutEffect, useMemo, useRef } from "react";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { SocialLinks } from "../../utils/links.ts";
import gsap from "gsap";

function Socials() {
  const icons = [
    { Icon: GitHub, link: SocialLinks.gitHub },
    { Icon: Email, link: `mailto:${SocialLinks.mail}` },
    {
      Icon: LinkedIn,
      link: SocialLinks.linkedIn,
    },
  ];
  const iconRefs = useMemo(
    () => icons.map((_) => createRef<HTMLButtonElement>()),
    []
  );
  const divRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Home",
        start: "bottom center",
        end: "top top",
        toggleActions: "play none play reverse",
      },
    });
    iconRefs.forEach((icon, i) => {
      tl.to(
        icon.current,
        {
          x: 100,
          opacity: 0,
          duration: 0.2,
          ease: "circ.in",
        },
        i * 0.1
      );
    });
    tl.to(divRef.current, { display: "none" });
  }, []);
  return (
    <div
      ref={divRef}
      id="socials-container"
      className="fixed right-6 bottom-10  h-auto flex gap-md overflow-hidden p-1"
    >
      {icons.map(({ Icon, link }, i) => (
        <FillButton
          key={i}
          variant="icon"
          ref={iconRefs[i]}
          onclick={() => window.open(link, "_blank")}
        >
          <Icon />
        </FillButton>
      ))}
    </div>
  );
}

export default Socials;
