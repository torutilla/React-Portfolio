import gsap from "gsap";
import { useRef } from "react";
import useRippleAnimation from "../../../hooks/useRippleAnimation.ts";
type FillButtonProps = {
  ref?: React.RefObject<HTMLButtonElement | null>;
  children?: React.ReactNode;
  variant?: "default" | "icon";
  onclick?: () => void;
  onBlur?: () => void;
};
function FillButton({
  children,
  variant,
  ref,
  onclick,
  onBlur,
}: FillButtonProps) {
  const variantStyle =
    variant == "icon" ? "rounded-full" : "rounded-2xl pl-4 pr-4";
  const btnRef = ref ? ref : useRef<HTMLButtonElement>(null);
  const btn = btnRef.current;

  const onClick = (e: React.MouseEvent) => {
    gsap.fromTo(btn, { y: -1, ease: "circ.in" }, { y: 0, duration: 0.3 });
    const ripple = useRippleAnimation(btnRef.current);
    ripple(e);

    if (onclick) onclick();
  };
  return (
    <div className="relative overflow-visible">
      <button
        ref={btnRef}
        onClick={onClick}
        onBlur={onBlur}
        className={`relative bg-accent flex justify-center 
        items-center cursor-pointer p-2 text-background 
        font-body font-medium overflow-hidden focus:outline-1 focus:outline-accent outline-offset-2
        ${variantStyle}`}
      >
        {children}
      </button>
    </div>
  );
}

export default FillButton;
