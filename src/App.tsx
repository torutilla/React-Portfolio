import Home from "./pages/Home.tsx";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollRefContext } from "./hooks/useSmoothScroll.ts";
import Background from "./components/Background.tsx";
import NavbarWrapper from "./components/layout/NavbarWrapper.tsx";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const smootherRef = useRef<ScrollSmoother>(null);

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 1,
    });
  }, []);
  return (
    <ScrollRefContext.Provider value={smootherRef}>
      <Background />
      <div id={"smooth-wrapper"}>
        <NavbarWrapper />
        <div id="smooth-content">
          <Home />
        </div>
        {/* <FloatingIconButton icon={LightMode} position="bottom-left" /> */}
      </div>
    </ScrollRefContext.Provider>
  );
}

export default App;
