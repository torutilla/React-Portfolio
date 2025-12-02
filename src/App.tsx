import { LightMode } from "@mui/icons-material";
import FloatingIconButton from "./components/common/buttons/FloatingIconButton.tsx";
import Home from "./pages/Home.tsx";
import NavbarWrapper from "./components/layout/NavbarWrapper.tsx";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SmootherContext } from "./lib/smootherContext.ts";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const smootherRef = useRef<ScrollSmoother>(null);
  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => smootherRef.current?.kill();
  }, []);
  return (
    <SmootherContext.Provider value={smootherRef}>
      <div id={"smooth-wrapper"}>
        <NavbarWrapper />
        <div id="smooth-content">
          <Home />
        </div>
        <FloatingIconButton icon={LightMode} position="bottom-left" />
      </div>
    </SmootherContext.Provider>
  );
}

export default App;
