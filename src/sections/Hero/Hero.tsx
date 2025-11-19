import Button from "../../components/common/Button.tsx";
import "./Hero.css";
function Hero() {
  return (
    <div id="hero">
      <div className="banner-title">
        <h1>HELLO, I'M CHRISTIAN</h1>
        <p>Developer & Graphic Designer</p>
      </div>
      <div className="call-to-action">
        <Button text="View Resume" />
        <Button text="Game Portfolio" />
      </div>
    </div>
  );
}

export default Hero;
