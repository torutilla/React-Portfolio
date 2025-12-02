import OutlineButton from "../common/buttons/OutlineButton.tsx";
import BurgerButton from "../common/buttons/BurgerButton.tsx";
import { SmootherContext } from "../../lib/smootherContext.ts";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
export type Navigation = {
  heading: string;
  navigateTo: string;
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
  const smoother = useContext(SmootherContext);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        gsap.to(navRef.current, {
          filter: "blur(5px)",
        });
      }
    });
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed p-5 flex w-full self-center justify-between items-center z-50 top-0"
    >
      <a href="#">
        <img src={logoSrc} alt="" />
      </a>
      <ul className="hidden gap-6 md:flex">
        {navigations.map((element) => (
          <li key={element.heading} className="self-center hidden sm:flex">
            <a
              onClick={() => {
                smoother?.current?.scrollTo(
                  element.navigateTo,
                  true,
                  "center center"
                );
              }}
              href={element.navigateTo}
              className="hover:text-accent transition duration-100 ease-in-out text-md"
            >
              {element.heading}
            </a>
          </li>
        ))}
        <OutlineButton>{button.heading}</OutlineButton>
      </ul>
      <BurgerButton onClick={setSidebarActive} isActive={menuOpen} />
    </nav>
  );
}

export default Navbar;
