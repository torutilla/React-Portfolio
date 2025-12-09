import OutlineButton from "../common/buttons/OutlineButton.tsx";
import BurgerButton from "../common/buttons/BurgerButton.tsx";
import { useScroll } from "../../lib/SmootherContext.ts";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 200) {
      //   gsap.to(spanRef.current, {
      //     backdropFilter: "blur(10px)",
      //     backgroundColor: "rgb(255 255 255 / 30%)",
      //     ease: "expo.in",
      //   });
      // }
    });
  }, []);
  return (
    <nav className="fixed p-4 flex w-full self-center justify-between items-center z-50 pl-5 pr-5">
      <a href="#" className="flex leading-none">
        <img src={logoSrc} alt="" />
      </a>
      <div
        className="hidden md:flex justify-around w-1/2 
      lg:w-1/2 p-3 self-center 
      border rounded-4xl
    bg-gray-300/15 backdrop-blur-sm border-gray-400/50"
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
