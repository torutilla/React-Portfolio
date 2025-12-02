import gsap from "gsap";
import { useEffect, useRef } from "react";

type WipeAnimatorProps = {
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  children: React.ReactNode;
};

function WipeAnimator({
  direction = "top",
  duration = 0.5,
  children,
}: WipeAnimatorProps) {
  const tl = useRef<GSAPTimeline>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const div = divRef.current;
    const span = spanRef.current;
    if (!div || !span) return;

    const update = () => {
      const rect = div.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dir = {
        left: { x: -width, y: 0 },
        top: { x: 0, y: -height },
        right: { x: width, y: 0 },
        bottom: { x: 0, y: height },
      }[direction];
      if (tl.current) tl.current.kill();
      tl.current = gsap.timeline();
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
    <div className="relative overflow-hidden">
      <div ref={divRef}>{children}</div>
      <span ref={spanRef} className="absolute inset-0 bg-accent"></span>
    </div>
  );
}

export default WipeAnimator;
