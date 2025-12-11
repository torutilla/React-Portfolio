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
  const direction = useScrollDirection();
  useEffect(() => {
    const div = divRef.current;
    const nav = navRef.current;
    if (!div || !nav) return;
    if (direction == "up") {
      gsap.to(nav, { y: 0 });
    } else {
      gsap.to(nav, { y: -nav.clientHeight });
    }
  }, [direction]);
  return (
    <nav
      ref={navRef}
      className="fixed p-4 flex w-full self-center justify-between items-center top-0 z-50 pl-5 pr-5"
    >
      <a href="#" className="flex leading-none">
        <img src={logoSrc} alt="" />
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
