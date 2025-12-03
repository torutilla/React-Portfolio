import type { ScrollSmoother } from "gsap/all";
import { createContext, useContext, type RefObject } from "react";

type ScrollContextType = {
    scrollTo: (target: string) => void;
}
export const ScrollContext = createContext<ScrollContextType>({
    scrollTo: ()=> {}
});
export const ScrollRefContext = createContext<RefObject<ScrollSmoother | null> | null>(null);
export const useScrollRef = ()=> useContext(ScrollRefContext);
export const useScroll =()=> useContext(ScrollContext);