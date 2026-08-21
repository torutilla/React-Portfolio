import { useLayoutEffect } from "react";
import gsap from "gsap";


type SlideOptions = ScrollTrigger.Vars;

function useSlideAnimation(ref: React.RefObject<HTMLElement | null>, override?: SlideOptions) {
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
          start: "top bottom",
          end: "top top+=20",
          scrub: true,
          ...override,

        },
      }
    );
  }, [ref, override]);

}

export default useSlideAnimation