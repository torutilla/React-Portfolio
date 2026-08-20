import { useState } from "react";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";

export type Navigation = {
  heading: string;
  target: string;
};
export const links: Navigation[] = [
  { heading: "Home", target: "/" },
  { heading: "About Me", target: "/about-me" },
  { heading: "Projects", target: "/projects" },
];
export const contactButton: Navigation = {
  heading: "Get in Touch",
  target: "/contact",
};
function NavbarWrapper() {
  const [sidebarOpen, setSidebar] = useState(false);
  return (
    <>
      <Navbar
        logoSrc="/public/Logo.svg"
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
