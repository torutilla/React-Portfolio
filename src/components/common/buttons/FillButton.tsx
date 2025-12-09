import gsap from "gsap";
import { useRef } from "react";

type FillButtonProps = {
  children?: React.ReactNode;
  variant?: "default" | "icon";
};
function FillButton({ children, variant }: FillButtonProps) {
  const variantStyle =
    variant == "icon" ? "rounded-full" : "rounded-2xl pl-4 pr-4";
  const btnRef = useRef<HTMLButtonElement>(null);
  const onMouseEnter = () => {
    gsap.to(btnRef.current, { y: -2, duration: 0.2, ease: "bounce.in" });
  };
  const onMouseLeave = () => {
    gsap.to(btnRef.current, { y: 0, duration: 0.2 });
  };
  const onClick = () => {
    gsap.to(btnRef.current, { y: 0, duration: 0.2 });
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
        font-body font-medium
        ${variantStyle}`}
    >
      {children}
    </button>
  );
}

export default FillButton;
