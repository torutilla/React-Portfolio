import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ScrollRefContext } from "./hooks/useSmoothScroll.ts";
import Background from "./components/Background.tsx";
import NavbarWrapper from "./components/layout/NavbarWrapper.tsx";
import AppRoutes from "./AppRoutes.tsx";
import ContactFooter from "./sections/Contact/ContactFooter.tsx";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const smootherRef = useRef<ScrollSmoother>(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 1,
    });
  }, []);

  useLayoutEffect(() => {
    // Re-measure all ScrollTriggers when the active route changes. Without this,
    // triggers created against #Contact (and other sections) keep using stale
    // offsets measured on the previous page, so the footer animation can fail
    // to fire when navigating between pages.
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <ScrollRefContext.Provider value={smootherRef}>
      <Background />
      <div id={"smooth-wrapper"}>
        <NavbarWrapper />
        <div id="smooth-content">
          <AppRoutes />
          <ContactFooter />
        </div>
        {/* <FloatingIconButton icon={LightMode} position="bottom-left" /> */}
      </div>
    </ScrollRefContext.Provider>
  );
}

export default App;
