import { useLayoutEffect, useRef } from "react";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import gsap from "gsap";

function Socials() {
  const icons = [GitHub, Email, LinkedIn];
  const iconRefs = icons.map((_) => useRef<HTMLButtonElement>(null));
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
  }, []);
  return (
    <div
      ref={divRef}
      id="socials-container"
      className="fixed right-6 bottom-10  h-auto flex gap-sm overflow-hidden p-1"
    >
      {icons.map((Icon, i) => (
        <FillButton key={i} variant="icon" ref={iconRefs[i]}>
          <Icon />
        </FillButton>
      ))}
    </div>
  );
}

export default Socials;
