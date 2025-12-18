import { useLayoutEffect, useRef } from "react";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import gsap from "gsap";

function Socials() {
  const icons = [GitHub, Email, LinkedIn];
  const iconRefs = icons.map((_, i) => useRef<HTMLButtonElement>(null));
  const divRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    iconRefs.forEach((ref) => {
      gsap.to(ref.current, {
        y: 100,
        scrollTrigger: {
          trigger: "#Home",
          start: "bottom center",
          end: "top top",
          markers: true,
          toggleActions: "play none play reverse",
        },
      });
    });
  }, []);
  return (
    <div
      ref={divRef}
      id="socials-container"
      className="fixed right-6 bottom-10  h-auto flex gap-sm"
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
