import gsap from "gsap";
import { useRef } from "react";
import useRippleAnimation from "../../../hooks/useRippleAnimation.ts";

type FillButtonProps = {
  ref?: React.RefObject<HTMLButtonElement | null>;
  children?: React.ReactNode;
  variant?: "default" | "icon";
  onclick?: () => void;
  onBlur?: () => void;
  color?: "primary" | "cta";
};

function FillButton({
  children,
  variant,
  ref,
  onclick,
  onBlur,
  color = "primary",
}: FillButtonProps) {
  const variantStyle =
    variant == "icon" ? "rounded-full" : "rounded-2xl pl-4 pr-4";

  const btnRef = ref ? ref : useRef<HTMLButtonElement>(null);

  const ripple = useRippleAnimation(btnRef.current);

  const colorStyles =
    color === "cta"
      ? "bg-cta text-black focus:outline-cta hover:bg-cta-highlight"
      : "bg-accent text-background focus:outline-accent hover:bg-background-highlight";

  const onClickHandler = (e: React.MouseEvent) => {
    gsap.fromTo(
      btnRef.current,
      { y: -1 },
      { y: 0, duration: 0.3, ease: "circ.in" },
    );

    ripple(e);

    if (onclick) onclick();
  };

  return (
    <div className="relative overflow-visible">
      <button
        ref={btnRef}
        onClick={onClickHandler}
        onBlur={onBlur}
        className={`relative flex justify-center items-center cursor-pointer p-2 font-body font-medium text-sm md:text-md overflow-hidden focus:outline-1 outline-offset-2
        ${variantStyle}
        ${colorStyles}
        transition-all duration-300
        `}
      >
        {children}
      </button>
    </div>
  );
}

export default FillButton;
