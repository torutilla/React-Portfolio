import { useState } from "react";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import { ScrollContext, useScrollRef } from "../../hooks/useSmoothScroll.ts";

export type Navigation = {
  heading: string;
  target: string;
};
export const links: Navigation[] = [
  { heading: "Home", target: "Home" },
  { heading: "Projects", target: "Projects" },
  { heading: "About Me", target: "About" },
];
export const contactButton: Navigation = {
  heading: "Get in Touch",
  target: "contact",
};
function NavbarWrapper() {
  const smoother = useScrollRef();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    smoother?.current?.scrollTo(element?.offsetTop!, true, "top top");
  };
  const [sidebarOpen, setSidebar] = useState(false);
  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <Navbar
        logoSrc="./Logo.svg"
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
