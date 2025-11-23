import IconButton from "../common/Button.tsx";
export type Navigation = {
  heading: string;
  navigateTo: string;
};

type NavbarProps = {
  logoSrc: string;
  navigations: Navigation[];
  button: Navigation;
};

function Navbar({ logoSrc, navigations, button }: NavbarProps) {
  return (
    <nav className="absolute p-4 flex w-full justify-between items-center z-50">
      <a href="#">
        <img src={logoSrc} alt="" />
      </a>
      <ul className="flex gap-6">
        {navigations.map((element) => (
          <li key={element.heading} className="self-center hidden sm:flex">
            <a
              href={element.navigateTo}
              className="hover:text-accent transition duration-100 ease-in-out"
            >
              {element.heading}
            </a>
          </li>
        ))}
        <IconButton>{button.heading}</IconButton>
      </ul>
    </nav>
  );
}

export default Navbar;
