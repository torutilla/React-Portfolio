import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

type RevealAnimatorProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  triggerOverrides?: ScrollTrigger.Vars;
};

function RevealAnimator({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 48,
  x = 0,
  scale = 1,
  triggerOverrides,
}: RevealAnimatorProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger.Vars | undefined>(triggerOverrides);

  useEffect(() => {
    triggerRef.current = triggerOverrides;
  });

  useLayoutEffect(() => {
    const el = divRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, x, y, scale },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
          ...triggerRef.current,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, duration, y, x, scale]);

  return <div ref={divRef} className={className}>{children}</div>;
}

export default RevealAnimator;