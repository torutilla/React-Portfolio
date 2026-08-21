import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import ContactPage from "./pages/Contact.tsx";
import About from "./pages/AboutMe.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me/" element={<About />} />
      <Route path="/projects/" element={<ProjectsPage />} />
      <Route path="/projects/:category/:slug" element={<ProjectDetailPage />} />
      <Route path="/contact/" element={<ContactPage />} />
    </Routes>
  );
}
