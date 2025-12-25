import { useLayoutEffect } from "react";
import gsap from "gsap";

function useSlideAnimation(triggerTarget:string, ref: React.RefObject<HTMLParagraphElement| HTMLHeadingElement | null>) {
        useLayoutEffect(() => {
            const p = ref.current;
            if (!p) return;
            gsap.fromTo(
              p,
              { y: p?.offsetHeight },
              {
                y: 0,
                duration: 0.3,
                scrollTrigger: {
                  trigger: triggerTarget,
                  start: "top bottom-=20",
                  end: "top top",
                  scrub: true,
                },
              }
            );
          }, [triggerTarget]);
    
}

export default useSlideAnimation