import { LightMode } from "@mui/icons-material";
import IconButton from "../../components/common/Button.tsx";
import FloatingIconButton from "../../components/common/buttons/FloatingIconButton.tsx";
function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col h-dvh w-dvw items-center justify-center gap-4"
    >
      <div className="banner-title">
        <h1>HELLO, I'M CHRISTIAN</h1>
        <p>Developer & Graphic Designer</p>
      </div>
      <div className="call-to-action flex gap-2 justify-center">
        <IconButton text="View Resume" />
        <IconButton text="View my works" />
        <FloatingIconButton icon={LightMode} position="bottom-right" />
      </div>
    </div>
  );
}

export default Hero;
