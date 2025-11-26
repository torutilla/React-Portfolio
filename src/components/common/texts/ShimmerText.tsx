import gsap from "gsap";
import { useEffect, useRef } from "react";

type ShimmerTextProps = {
  text: string;
  size: "sm" | "md" | "lg";
};

function ShimmerText({ text, size }: ShimmerTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { y: 0, duration: 1, ease: "ease-in", opacity: 1 }
    );
  }, []);
  return (
    <div className="overflow-hidden">
      <h1
        ref={ref}
        data-text={text}
        className={`
          ml-4 mr-4
          translate-y-100 relative font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-title
        after:bg-linear-to-r after:from-transparent 
        after:via-white/50 after:text-transparent
        after:to-transparent after:animate-shimmer after:bg-size-[200%_200%] 
        after:absolute after:bg-clip-text after:inset-0
        after:content-[attr(data-text)] after:z-999 cursor-text after:cursor-text`}
      >
        {text}
      </h1>
    </div>
  );
}

export default ShimmerText;
