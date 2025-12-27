import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import Dropdown from "../../components/common/buttons/Dropdown.tsx";
import { type DropdownItem } from "../../components/common/buttons/Dropdown.tsx";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";

function Hero() {
  const buttonItems: DropdownItem[] = [
    {
      heading: "View Resume",
      subtitle: "Download PDF resume",
      onClick: () => {
        window.open("src/assets/files/Resume.pdf", "_blank");
      },
    },
    {
      heading: "Interactive Resume",
      subtitle: "Walkthrough my game-style resume",
      onClick: () => {
        window.open(
          "https://christian-torres-interactive-resume.vercel.app/",
          "_blank"
        );
      },
    },
  ];
  const logoSrc = "./Logo.svg";
  return (
    <div
      id="Home"
      className="relative flex flex-col h-dvh w-dvw items-center justify-center gap-xl z-0"
    >
      <div className="absolute top-0 flex w-full justify-between items-center p-4">
        <a href="#" className="flex leading-none size-7 md:size-9">
          <img src={logoSrc} alt="logo" />
        </a>
        <div className=" justify-end flex">
          <FillButton>Get in Touch</FillButton>
        </div>
      </div>
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

      <Dropdown content="Resume" items={buttonItems} />
    </div>
  );
}

export default Hero;
