import WipeAnimator from "../../components/animator/WipeAnimator.tsx";
import OutlineButton from "../../components/common/buttons/OutlineButton.tsx";
import HeroTitle from "../../components/common/texts/HeroTitle.tsx";
function Hero() {
  return (
    <div
      id="Home"
      className="bg-background relative flex flex-col h-dvh w-dvw items-center justify-center gap-4 z-0"
    >
      {/* <div className="h-full w-full bg-white absolute -z-1"></div> */}

      <div className="flex-col flex justify-center items-center text-center">
        <WipeAnimator duration={0.2} direction="bottom">
          <HeroTitle text="CHRISTIAN TORRES" />
        </WipeAnimator>
        <WipeAnimator direction="left">
          <p className="font-subtitle font-bold text-text xs:text-xl md:text-3xl">
            DEVELOPER & GRAPHIC DESIGNER
          </p>
        </WipeAnimator>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <OutlineButton>View Resume</OutlineButton>
        <OutlineButton>View Works</OutlineButton>
      </div>
    </div>
  );
}

export default Hero;
