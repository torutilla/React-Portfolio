import gsap from "gsap";
import { useEffect, useRef } from "react";

type WipeAnimatorProps = {
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  children: React.ReactNode;
  trigger?: ScrollTrigger.Vars | null;
};

function WipeAnimator({
  direction = "top",
  duration = 0.5,
  children,
  trigger = null,
}: WipeAnimatorProps) {
  const tl = useRef<GSAPTimeline>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const offset = 10;
  useEffect(() => {
    const div = divRef.current;
    const span = spanRef.current;
    if (!div || !span) return;

    const update = () => {
      const width = div.offsetWidth;
      const height = div.offsetHeight;
      const dir = {
        left: { x: -width - offset, y: 0 },
        top: { x: 0, y: -height - offset },
        right: { x: width + offset, y: 0 },
        bottom: { x: 0, y: height + offset },
      }[direction];
      if (tl.current) tl.current.kill();
      tl.current = gsap.timeline({
        ...(trigger && { scrollTrigger: trigger }),
      });
      tl.current
        .fromTo(span, { x: dir.x, y: dir.y }, { x: 0, y: 0 })
        .to(span, { x: -dir.x, y: -dir.y, duration: duration })
        .fromTo(
          div,
          { x: dir.x, y: dir.y, ease: "circ.in" },
          { x: 0, y: 0 },
          "<"
        );
    };

    update();

    const observer = new ResizeObserver(() => update());

    observer.observe(div);

    return () => observer.disconnect();
  }, [direction, duration]);

  return (
    <div className="relative overflow-hidden w-fit">
      <div ref={divRef}>{children}</div>
      <span ref={spanRef} className="absolute inset-0 bg-accent"></span>
    </div>
  );
}

export default WipeAnimator;
