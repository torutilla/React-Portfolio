import { useState } from "react";
import Navbar, { type Navigation } from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import { ScrollContext, useScrollRef } from "../../lib/SmootherContext.ts";

function NavbarWrapper() {
  const links: Navigation[] = [
    { heading: "Home", target: "#Home" },
    { heading: "Skills", target: "#Skills" },
    { heading: "Projects", target: "#Projects" },
    { heading: "About Me", target: "#AboutMe" },
  ];
  const contactButton: Navigation = {
    heading: "Contact Me",
    target: "#ContactMe",
  };
  const smoother = useScrollRef();
  const scrollTo = (id: string) => {
    smoother?.current?.scrollTo(id, true, "top top");
  };
  const [sidebarOpen, setSidebar] = useState(false);
  return (
    <ScrollContext.Provider value={{ scrollTo }}>
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
    </ScrollContext.Provider>
  );
}

export default NavbarWrapper;
