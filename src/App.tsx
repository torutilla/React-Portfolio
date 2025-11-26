import { LightMode } from "@mui/icons-material";
import "./App.css";
import FloatingIconButton from "./components/common/buttons/FloatingIconButton.tsx";
import Sidebar from "./components/layout/Sidebar.tsx";
import Home from "./pages/Home.tsx";
import Navbar, { type Navigation } from "./components/layout/Navbar.tsx";
import { useState } from "react";
function App() {
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
        setOpen={setSidebar}
      />
      <Sidebar isOpen={sidebarOpen} />
      <Home></Home>
      <FloatingIconButton icon={LightMode} position="bottom-left" />
    </>
  );
}

export default App;
