import type { ScrollSmoother } from "gsap/all";
import { createContext, useContext, type RefObject } from "react";

export const ScrollRefContext = createContext<RefObject<ScrollSmoother | null> | null>(null);
export const useScrollRef = ()=> useContext(ScrollRefContext);
export function useScroll(){
    const ref = useScrollRef();
    return (target: gsap.DOMTarget)=>{
        ref?.current?.scrollTo(target, true, "top top");
    }
}