import Home from "./pages/Home.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollRefContext } from "./hooks/useSmoothScroll.ts";
import { useHashRoute } from "./hooks/useHashRoute.ts";
import Background from "./components/Background.tsx";
import NavbarWrapper from "./components/layout/NavbarWrapper.tsx";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const smootherRef = useRef<ScrollSmoother>(null);
  const route = useHashRoute();

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
    if (route.type !== "home") return;

    const smoother = smootherRef.current;
    if (!smoother) return;

    ScrollTrigger.refresh();
    requestAnimationFrame(() => {
      smoother.scrollTo(`#${route.section}`, true, "top top");
    });
  }, [route]);
  return (
    <ScrollRefContext.Provider value={smootherRef}>
      <Background />
      <div id={"smooth-wrapper"}>
        <NavbarWrapper />
        <div id="smooth-content">
          {route.type === "home" && <Home />}
          {route.type === "projects" && (
            <ProjectsPage category={route.category} />
          )}
          {route.type === "project-detail" && (
            <ProjectDetailPage
              category={route.category}
              slug={route.slug}
            />
          )}
        </div>
        {/* <FloatingIconButton icon={LightMode} position="bottom-left" /> */}
      </div>
    </ScrollRefContext.Provider>
  );
}

export default App;
