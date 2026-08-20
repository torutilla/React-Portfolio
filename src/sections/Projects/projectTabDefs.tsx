import {
  Brush,
  Language,
  Smartphone,
  SportsEsports,
} from "@mui/icons-material";
import type { ProjectCategory } from "../../utils/projects.ts";

export const PROJECT_TAB_DEFS = [
  {
    key: "mobile" as const,
    label: "Mobile",
    icon: Smartphone,
  },
  {
    key: "game" as const,
    label: "Game",
    icon: SportsEsports,
  },
  {
    key: "web" as const,
    label: "Web",
    icon: Language,
  },
  {
    key: "design" as const,
    label: "Graphic Design",
    icon: Brush,
  },
];

export function getTabIndexForCategory(category: ProjectCategory): number {
  const index = PROJECT_TAB_DEFS.findIndex((tab) => tab.key === category);
  return index === -1 ? 0 : index;
}
