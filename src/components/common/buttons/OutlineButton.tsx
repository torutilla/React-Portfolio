import { useRef, type MouseEventHandler } from "react";
import gsap from "gsap";
import useRippleAnimation from "../../../hooks/useRippleAnimation.ts";
type OutlineButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function OutlineButton({ onClick, children }: OutlineButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    if (onClick) onClick(e);
    const handleRipple = useRippleAnimation(btnRef.current);
    handleRipple(e);
    gsap.fromTo(
      btn,
      { scale: 0.1, duration: 0.5, ease: "power3.in" },
      { scale: 1, duration: 0.1 }
    );
  };
  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="
      group relative
      overflow-hidden
      p-2 pl-4 pr-4 cursor-pointer
      text-accent
      lg:text-accent 
      hover:text-hover-text
      transition-all duration-400 ease-in-out
      rounded-2xl
      font-body font-semibold

      before:scale-x-0
      before:absolute before:inset-0 lg:before:scale-x-0
      before:bg-accent 
      before:origin-left
      before:duration-400 before:transition-all
      before:text-hover-text
      lg:hover:before:scale-x-100
      before:ease-in-out before:-z-1
    "
    >
      {children}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="16"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="0"
          className="stroke-accent
          transition-[stroke-dashoffset] duration-700 
          group-hover:[stroke-dashoffset:100]"
        />
      </svg>
    </button>
  );
}

export default OutlineButton;
