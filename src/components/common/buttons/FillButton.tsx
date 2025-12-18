import gsap from "gsap";
import { useRef } from "react";
import useRippleAnimation from "../../../hooks/useRippleAnimation.ts";
type FillButtonProps = {
  ref?: React.RefObject<HTMLButtonElement | null>;
  children?: React.ReactNode;
  variant?: "default" | "icon";
};
function FillButton({ children, variant, ref }: FillButtonProps) {
  const variantStyle =
    variant == "icon" ? "rounded-full" : "rounded-2xl pl-4 pr-4";
  const btnRef = ref ? ref : useRef<HTMLButtonElement>(null);
  const ripple = useRippleAnimation(btnRef);
  const onMouseEnter = () => {
    // gsap.to(btnRef.current, { y: -2, duration: 0.2, ease: "bounce.in" });
  };
  const onMouseLeave = () => {
    // gsap.to(btnRef.current, { y: 0, duration: 0.2 });
  };
  const onClick = (e: React.MouseEvent) => {
    gsap.fromTo(
      btnRef.current,
      { y: -1, ease: "circ.in" },
      { y: 0, duration: 0.3 }
    );
    ripple(e);
  };
  return (
    <button
      ref={btnRef}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`bg-accent flex justify-center 
        items-center cursor-pointer p-2 text-background 
        outline-offset-2 outline-1 outline-accent
        font-body font-medium overflow-hidden
        ${variantStyle}`}
    >
      {children}
    </button>
  );
}

export default FillButton;
