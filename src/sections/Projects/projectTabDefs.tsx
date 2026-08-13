import {
  Brush,
  Language,
  Smartphone,
  SportsEsports,
} from "@mui/icons-material";
import type { ProjectCategory } from "../../lib/projectRoutes.ts";
import DesignTab from "./DesignTab.tsx";
import GameDevelopmentTab from "./GameDevelopmentTab.tsx";
import MobileDevelopmentTab from "./MobileDevelopmentTab.tsx";
import WebDevelopmentTab from "./WebDevelopmentTab.tsx";

export const PROJECT_TAB_DEFS = [
  {
    key: "mobile" as const,
    label: "Mobile",
    component: MobileDevelopmentTab,
    icon: Smartphone,
  },
  {
    key: "game" as const,
    label: "Game",
    component: GameDevelopmentTab,
    icon: SportsEsports,
  },
  {
    key: "web" as const,
    label: "Web",
    component: WebDevelopmentTab,
    icon: Language,
  },
  {
    key: "design" as const,
    label: "Graphics & UI",
    component: DesignTab,
    icon: Brush,
  },
];

export function getTabIndexForCategory(category: ProjectCategory): number {
  const index = PROJECT_TAB_DEFS.findIndex((tab) => tab.key === category);
  return index === -1 ? 0 : index;
}
