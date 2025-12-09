import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import OutlineButton from "../../components/common/buttons/OutlineButton.tsx";
import FillButton from "../../components/common/buttons/FillButton.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function Hero() {
  return (
    <div
      id="Home"
      className="bg-background relative flex flex-col h-dvh w-dvw items-center justify-center gap-xl z-0"
    >
      <div className="flex-col flex justify-center items-center text-center">
        <WipeAnimator duration={0.2} direction="bottom">
          <HeroTitle text="CHRISTIAN TORRES" />
        </WipeAnimator>
        <WipeAnimator direction="left">
          <p className="font-body font-extralight text-text xs:text-xl md:text-3xl lg:text-4xl">
            DEVELOPER & GRAPHIC DESIGNER
          </p>
        </WipeAnimator>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <OutlineButton>View Resume</OutlineButton>
      </div>
      <div
        id="socials-container"
        className="absolute right-6 bottom-10  h-auto flex gap-sm"
      >
        <FillButton variant="icon">
          <GitHub />
        </FillButton>
        <FillButton variant="icon">
          <Email />
        </FillButton>
        <FillButton variant="icon">
          <LinkedIn />
        </FillButton>
      </div>
    </div>
  );
}

export default Hero;
