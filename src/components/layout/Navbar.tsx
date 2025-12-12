import BurgerButton from "../common/buttons/BurgerButton.tsx";
import { useScroll } from "../../hooks/useSmoothScroll.ts";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollDirection } from "../../hooks/useScrollDirection.ts";
import FillButton from "../common/buttons/FillButton.tsx";
export type Navigation = {
  heading: string;
  target: string;
};

type NavbarProps = {
  logoSrc: string;
  navigations: Navigation[];
  button: Navigation;
  menuOpen: boolean;
  setSidebarActive: () => void;
};

function Navbar({
  logoSrc,
  navigations,
  button,
  menuOpen,
  setSidebarActive,
}: NavbarProps) {
  const { scrollTo } = useScroll();
  const navRef = useRef<HTMLElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const scrollTreshold = 10;
  const { direction: scrollDir, currentScroll } =
    useScrollDirection(scrollTreshold);
  useEffect(() => {
    const div = divRef.current;
    const nav = navRef.current;
    if (!div || !nav) return;
    gsap.killTweensOf(nav);
    if (currentScroll < scrollTreshold) {
      gsap.to(nav, {
        backgroundColor: "rgba(100, 100, 100, 0)",
        border: "0px",
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (scrollDir == "up") {
      gsap.to(nav, { y: 0, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(nav, {
        y: -nav.offsetHeight - 10,
        duration: 0.3,
        ease: "power3.in",
      });

      gsap.to(nav, {
        backgroundColor: "rgba(100, 100, 100, 0.5)",
        border: "1px solid rgba(100, 100, 100, 1)",
        ease: "power1.in",
        duration: 0.3,
      });
    }
  }, [scrollDir, currentScroll]);
  return (
    <nav
      ref={navRef}
      className="fixed p-4 px-5 flex self-center justify-between items-center top-2 right-2 left-2 z-50 rounded-full backdrop-blur-sm"
    >
      <a href="#" className="flex leading-none">
        <img src={logoSrc} alt="logo" />
      </a>
      <div
        ref={divRef}
        className="hidden md:flex justify-around w-1/2 
      lg:w-1/2 p-3 self-center 
      rounded-4xl"
      >
        <ul className="hidden gap-6 md:flex">
          {navigations.map((element) => (
            <li key={element.heading} className="self-center hidden sm:flex">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(element.target);
                }}
                href={element.target}
                className="hover:text-accent transition duration-100 ease-in-out text-sm text-text font-title"
              >
                {element.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <FillButton>{button.heading}</FillButton>
      <BurgerButton onClick={setSidebarActive} isActive={menuOpen} />
    </nav>
  );
}

export default Navbar;
