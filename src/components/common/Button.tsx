import { useRef, type MouseEventHandler } from "react";
import gsap from "gsap";
type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function Button({ onClick, children }: IconButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    const btn = btnRef.current;
    const span = spanRef.current;

    if (!btn || !span) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    gsap.killTweensOf(span);
    gsap.set(span, { scale: 0, opacity: 1 });

    gsap.to(span, {
      scale: 4,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.fromTo(
      btn,
      { scale: 0.1, duration: 0.05, ease: "power3.in" },
      { scale: 1, duration: 0.2 }
    );
  };
  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="
      group relative
      overflow-hidden
      p-2 cursor-pointer
      text-accent
      lg:text-accent 
      hover:text-hover-text
      transition-all duration-400 ease-in-out

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
      <span
        ref={spanRef}
        className="
        absolute pointer-events-none rounded-full 
        bg-accent
      lg:bg-black/80 w-32 h-32
        -translate-x-1/2 -translate-y-1/2 opacity-0
        -z-1"
      ></span>
      {children}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="0"
          strokeWidth="2.5"
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

export default Button;
