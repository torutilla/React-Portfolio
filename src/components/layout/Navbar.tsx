import "./Navbar.css";
import Button from "../common/Button.tsx";
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
    <nav>
      <img src={logoSrc} alt="" />
      <ul>
        {navigations.map((element) => (
          <li key={element.heading}>
            <a href={element.navigateTo}>{element.heading}</a>
          </li>
        ))}
        <Button text={button.heading} />
      </ul>
    </nav>
  );
}

export default Navbar;
