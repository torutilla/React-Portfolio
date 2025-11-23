import { LightMode } from "@mui/icons-material";
import IconButton from "../../components/common/Button.tsx";
import FloatingIconButton from "../../components/common/buttons/FloatingIconButton.tsx";
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
        <IconButton>View Resume</IconButton>
        <IconButton>View Works</IconButton>
        <FloatingIconButton icon={LightMode} position="bottom-right" />
      </div>
    </div>
  );
}

export default Hero;
