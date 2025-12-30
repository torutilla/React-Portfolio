import { useLayoutEffect } from "react";
import gsap from "gsap";


type SlideOptions = ScrollTrigger.Vars;

function useSlideAnimation(trigger:string, ref: React.RefObject<HTMLElement | null>, override?: SlideOptions) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
      gsap.fromTo(
        el,
        { y: el.offsetHeight },
        {
          y: 0,
          duration: 0.3,
          scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "top top+=20",
            scrub: true,
            ...override,
          },
        }
      );
    }, [trigger, ref, override]);
    
}

export default useSlideAnimation