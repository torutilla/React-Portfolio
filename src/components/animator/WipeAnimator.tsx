import gsap from "gsap";
import { useEffect, useRef } from "react";

type WipeAnimatorProps = {
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  children: React.ReactNode;
  trigger?: ScrollTrigger.Vars | null;
  className?: string;
  selfTrigger?: boolean;
};

function WipeAnimator({
  direction = "top",
  duration = 0.5,
  children,
  trigger = null,
  className = "",
  selfTrigger = false,
}: WipeAnimatorProps) {
  const tl = useRef<GSAPTimeline | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const offset = 10;

  // Keep the latest trigger props in refs so that rebuilding the timeline only
  // happens when this effect actually needs to (direction/duration/size), never
  // when a parent re-renders with a fresh inline `trigger` object identity.
  const triggerRef = useRef(trigger);
  const selfTriggerRef = useRef(selfTrigger);
  useEffect(() => {
    triggerRef.current = trigger;
    selfTriggerRef.current = selfTrigger;
  });

  useEffect(() => {
    const div = divRef.current;
    const span = spanRef.current;
    if (!div || !span) return;

    const killTimeline = () => {
      if (tl.current) {
        // Killing the ScrollTrigger first avoids leaking a stale trigger that
        // would keep firing a dead timeline.
        tl.current.scrollTrigger?.kill();
        tl.current.kill();
        tl.current = null;
      }
    };

    const build = () => {
      const width = div.offsetWidth;
      const height = div.offsetHeight;
      const dir = {
        left: { x: -width - offset, y: 0 },
        top: { x: 0, y: -height - offset },
        right: { x: width + offset, y: 0 },
        bottom: { x: 0, y: height + offset },
      }[direction];
      const trigger = triggerRef.current;
      const selfTriggerEnabled = selfTriggerRef.current;

      killTimeline();

      const scrollTriggerVars: ScrollTrigger.Vars | null = selfTriggerEnabled
        ? { trigger: div, start: "top 85%", once: true }
        : trigger;

      tl.current = gsap.timeline(
        scrollTriggerVars ? { scrollTrigger: scrollTriggerVars } : {}
      );

      tl.current
        .fromTo(span, { x: dir.x, y: dir.y }, { x: 0, y: 0 })
        .to(span, { x: -dir.x, y: -dir.y, duration: duration })
        // `ease` belongs in the "to" vars — in the "from" vars GSAP ignores it.
        .fromTo(div, { x: dir.x, y: dir.y }, { x: 0, y: 0, ease: "circ.in" }, "<");
    };

    // Re-measure after fonts/layout settle (and on any resize) so the wipe
    // distance always matches the actual rendered size.
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Don't restart the wipe once it has already played.
        if (tl.current && tl.current.progress() >= 1) return;
        build();
      });
    };

    build();

    const observer = new ResizeObserver(onResize);
    observer.observe(div);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      killTimeline();
    };
  }, [direction, duration]);

  return (
    <div className={`relative overflow-hidden w-fit ${className}`}>
      <div ref={divRef}>{children}</div>
      <span ref={spanRef} className="absolute inset-0 bg-accent"></span>
    </div>
  );
}

export default WipeAnimator;
