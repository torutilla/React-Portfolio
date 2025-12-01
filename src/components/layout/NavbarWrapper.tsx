import { useState } from "react";
import Navbar, { type Navigation } from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";

function NavbarWrapper() {
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

  const [sidebarOpen, setSidebar] = useState(false);
  return (
    <>
      <Navbar
        logoSrc="./vite.svg"
        navigations={links}
        button={contactButton}
        menuOpen={sidebarOpen}
        setSidebarActive={() => setSidebar(!sidebarOpen)}
      />
      <Sidebar
        isOpen={sidebarOpen}
        navigations={links}
        onClose={() => setSidebar(!sidebarOpen)}
      />
    </>
  );
}

export default NavbarWrapper;
