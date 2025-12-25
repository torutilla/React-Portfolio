import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
function Background() {
  const root = getComputedStyle(document.documentElement);
  return (
    <div className="fixed w-dvw h-dvh">
      <ShaderGradientCanvas>
        <ShaderGradient
          animate="on"
          brightness={1.1}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          color1="#000000"
          color2={root.getPropertyValue("--accent-background").trim()}
          color3="#0e1010"
          envPreset="city"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="enabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

export default Background;
