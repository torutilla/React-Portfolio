import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/" element={<ProjectsPage />} />
      <Route path="/projects/:category/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
