import BurgerButton from "../common/buttons/BurgerButton.tsx";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollDirection } from "../../hooks/useScrollDirection.ts";
import FillButton from "../common/buttons/FillButton.tsx";
import { type Navigation } from "./NavbarWrapper.tsx";
import WipeAnimator from "../animator/WipeAnimator.tsx";
import { useNavigate } from "react-router-dom";
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
  const navRef = useRef<HTMLElement>(null);
  const scrollTreshold = 10;
  const { direction: scrollDir } = useScrollDirection(scrollTreshold);
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.to(nav, {
      backgroundColor: "rgba(100, 100, 100, 0.3)",
      border: "1px solid rgba(100, 100, 100, 1)",
      duration: 0.3,
      scrollTrigger: {
        trigger: "#Home",
        start: "top top",
        end: "bottom top",
        onLeaveBack: () => {
          gsap.to(nav, {
            backgroundColor: "rgba(100, 100, 100, 0)",
            border: "0px",
            duration: 0.6,
          });
        },
      },
    });
    // if (currentScroll < scrollTreshold) {
    // }
    if (scrollDir == "up") {
      gsap.to(nav, { y: 0, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(nav, {
        y: -nav.offsetHeight - 10,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [scrollDir]);
  const navigate = useNavigate();
  return (
    <nav
      ref={navRef}
      className="fixed p-2.5 px-5 grid grid-cols-2 md:grid-cols-3 justify-between items-center top-2 right-2 left-2 z-50 rounded-full backdrop-blur-sm"
    >
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className="flex leading-none size-7 md:size-9"
      >
        <img src={logoSrc} alt="logo" />
      </a>

      <ul className="hidden gap-6 md:flex justify-center">
        {navigations.map((element) => (
          <li
            key={element.heading}
            className="hidden sm:flex text-nowrap cursor-pointer"
          >
            <WipeAnimator direction="bottom">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate(element.target);
                }}
                className="hover:text-accent transition duration-100 ease-in-out text-sm text-text font-title"
              >
                {element.heading}
              </a>
            </WipeAnimator>
          </li>
        ))}
      </ul>
      <div className="hidden justify-end md:flex">
        <FillButton onclick={() => navigate(button.target)}>
          {button.heading}
        </FillButton>
      </div>
      <div className="flex justify-end md:hidden">
        <BurgerButton onClick={setSidebarActive} isActive={menuOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
