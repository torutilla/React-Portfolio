import type { SvgIconComponent } from "@mui/icons-material";
import { useRef, useEffect, type MouseEventHandler } from "react";
type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: SvgIconComponent;
  children: React.ReactNode;
};

function IconButton({ onClick, icon: Icon, children }: IconButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const span = spanRef.current;
    if (!btn || !span) return;
    const handleClick = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty("--origin-x", `${x}px`);
      btn.style.setProperty("--origin-y", `${y}px`);
    };
    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, []);
  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="group relative
      overflow-hidden
    p-2 cursor-pointer
    text-accent 
    hover:text-hover-text
    transition-all duration-400 ease-in-out

    before:absolute before:inset-0 before:scale-x-0
    before:bg-accent 
    before:origin-left
    before:duration-400 before:transition-all
    hover:before:scale-x-100
    before:ease-in-out before:-z-1"
    >
      <span
        ref={spanRef}
        className="absolute bg-black inset-0 scale-0 transition-all duration-75 group-active:animate-ripple -z-1 rounded-full size-32"
      ></span>
      {Icon && <Icon fontSize="inherit" className="" />}
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

export default IconButton;
