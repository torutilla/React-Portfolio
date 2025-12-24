import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import Dropdown from "../../components/common/buttons/Dropdown.tsx";
import { type DropdownItem } from "../../components/common/buttons/Dropdown.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";

function Hero() {
  const buttonItems: DropdownItem[] = [
    {
      heading: "View Resume",
      subtitle: "Download PDF resume",
      onClick: () => {},
    },
    {
      heading: "Interactive Resume (Experimental)",
      subtitle: "Walkthrough my game-based resume",
      onClick: () => {},
    },
  ];
  return (
    <div
      id="Home"
      className="relative flex flex-col h-dvh w-dvw items-center justify-center gap-xl z-0"
    >
      <div className="flex-col flex justify-center items-center text-center">
        <WipeAnimator duration={0.2} direction="bottom">
          <HeroTitle text="CHRISTIAN TORRES" />
        </WipeAnimator>
        <WipeAnimator direction="left">
          <p className="font-body font-extralight text-text text-hero-subtitle">
            DEVELOPER & GRAPHIC DESIGNER
          </p>
        </WipeAnimator>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <Dropdown content="Resume" items={buttonItems} />
      </div>
    </div>
  );
}

export default Hero;
