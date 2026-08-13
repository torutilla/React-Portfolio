import gsap from "gsap";
import { useEffect, useRef } from "react";
import { type Navigation } from "./NavbarWrapper.tsx";
import { useSectionNavigation } from "../../hooks/useSectionNavigation.ts";
import type { HomeSection } from "../../lib/projectRoutes.ts";
type SidebarProps = {
  isOpen: boolean;
  navigations: Navigation[];
  onClose: () => void;
};

function Sidebar({ isOpen, navigations, onClose }: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const navigateToSection = useSectionNavigation();
  const handleNavigation = (target: Navigation["target"]) => {
    onClose();
    navigateToSection(target as `#${HomeSection}`);
  };
  useEffect(() => {
    if (isOpen) {
      gsap.to(ref.current, { x: 0, duration: 0.2 });
    } else {
      gsap.to(ref.current, { x: 1000, duration: 0.2 });
    }
  }, [isOpen]);
  return (
    <div className="absolute h-screen w-full overflow-hidden">
      <div
        ref={ref}
        className="bg-background absolute right-0 w-full h-full z-40 transition-all origin-right md:hidden p-5 translate-x-1000"
      >
        <ul className="flex flex-col h-auto mt-18 w-full gap-4">
          {navigations.map((nav) => (
            <li key={nav.heading} className="flex p-1">
              <a
                href={nav.target}
                className="text-lg sm:text-xl text-text font-title"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(nav.target);
                }}
              >
                {nav.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
