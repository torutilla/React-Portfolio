import Button from "../../components/common/Button.tsx";
import ShimmerText from "../../components/common/texts/ShimmerText.tsx";
function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col h-dvh w-dvw items-center justify-center gap-4 bg-(--bg-color) z-0"
    >
      <div className="banner-title">
        <ShimmerText text="CHRISTIAN TORRES" size="lg" />
        <p className="font-subtitle font-bold text-[#333333]">
          DEVELOPER & GRAPHIC DESIGNER
        </p>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <Button>View Resume</Button>
        <Button>View Works</Button>
      </div>
    </div>
  );
}

export default Hero;
