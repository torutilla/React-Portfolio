import type { ScrollSmoother } from "gsap/all";
import { createContext, type RefObject } from "react";

export const SmootherContext = createContext<RefObject<ScrollSmoother | null> | null>(null);