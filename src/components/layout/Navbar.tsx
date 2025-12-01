import Button from "../common/Button.tsx";
import BurgerButton from "../common/buttons/BurgerButton.tsx";
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
  const handleOnScroll = () => {};
  return (
    <nav
      onScroll={handleOnScroll}
      className="absolute p-4 flex w-full justify-between items-center z-50 top-0 m-4 mt-0"
    >
      <a href="#">
        <img src={logoSrc} alt="" />
      </a>
      <ul className="hidden gap-6 md:flex">
        {navigations.map((element) => (
          <li key={element.heading} className="self-center hidden sm:flex">
            <a
              href={element.navigateTo}
              className="hover:text-accent transition duration-100 ease-in-out text-md"
            >
              {element.heading}
            </a>
          </li>
        ))}
        <Button>{button.heading}</Button>
      </ul>
      <BurgerButton onClick={setSidebarActive} isActive={menuOpen} />
    </nav>
  );
}

export default Navbar;
