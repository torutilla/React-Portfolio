import Navbar, { type Navigation } from "../components/layout/Navbar.tsx";
import Hero from "../sections/Hero/Hero.tsx";
function Home() {
  const links: Navigation[] = [
    { heading: "Home", navigateTo: "#Home" },
    { heading: "Skills", navigateTo: "#Skills" },
    { heading: "Projects", navigateTo: "#Projects" },
    { heading: "About Me", navigateTo: "#AboutMe" },
  ];
  const contactButton: Navigation = {
    heading: "Contact Me",
    navigateTo: "#ContactMe",
  };
  return (
    <div className="">
      <Navbar logoSrc="./vite.svg" navigations={links} button={contactButton} />
      <Hero />
    </div>
  );
}

export default Home;
