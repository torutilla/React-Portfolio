import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import Dropdown from "../../components/common/buttons/Dropdown.tsx";
import { type DropdownItem } from "../../components/common/buttons/Dropdown.tsx";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import OutlineButton from "../../components/common/buttons/OutlineButton.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";
import { useScroll } from "../../hooks/useSmoothScroll.ts";
import { interactiveResumeLink } from "../../utils/links.ts";

function Hero() {
  const buttonItems: DropdownItem[] = [
    {
      heading: "Software Developer",
      subtitle: "Download Developer PDF",
      onClick: () => open("./files/Torres_Christian_SoftwareDeveloper.pdf"),
    },
    {
      heading: "Graphic & UI Designer",
      subtitle: "Download Creative PDF",
      onClick: () => open("./files/Torres_Christian_GraphicDesigner.pdf"),
    },
  ];

  const open = (src: string) => {
    window.open(src, "_blank");
  };
  const scrollTo = useScroll();
  return (
    <div
      id="Home"
      className="relative flex flex-col h-screen w-dvw items-center justify-center gap-xl z-0"
    >
      {/* <div className="absolute top-0 flex w-full justify-between items-center p-4">
        <a href="#" className="flex leading-none size-7 md:size-9">
          <img src={"./Logo.svg"} alt="logo" />
        </a>
        <div className=" justify-end flex">
          <FillButton onclick={() => scrollTo("#Contact")}>
            Get in Touch
          </FillButton>
        </div>
      </div> */}
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
      <div className="flex gap-2">
        <Dropdown content="Download PDF" items={buttonItems} />
        <FillButton onclick={() => open(interactiveResumeLink)} color="cta">
          Interactive Resume
        </FillButton>
      </div>
    </div>
  );
}

export default Hero;
