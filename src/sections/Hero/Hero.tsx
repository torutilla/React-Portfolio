import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import OutlineButton from "../../components/common/buttons/OutlineButton.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";

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
          <p className="font-body font-extralight text-text text-hero-subtitle">
            DEVELOPER & GRAPHIC DESIGNER
          </p>
        </WipeAnimator>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <OutlineButton>View Resume</OutlineButton>
      </div>
    </div>
  );
}

export default Hero;
