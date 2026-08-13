import { parseHashRoute, type HomeSection } from "../lib/projectRoutes.ts";
import { useScroll } from "./useSmoothScroll.ts";

export function useSectionNavigation() {
  const scrollTo = useScroll();

  const navigateToSection = (target: `#${HomeSection}`) => {
    const currentRoute = parseHashRoute(window.location.hash);

    if (currentRoute.type === "home" && window.location.hash === target) {
      scrollTo(target);
      return;
    }

    window.location.hash = target;
  };

  return navigateToSection;
}
