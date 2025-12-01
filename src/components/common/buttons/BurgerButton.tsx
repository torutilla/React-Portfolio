import gsap from "gsap";
import { useEffect, useRef } from "react";
type BurgerButtonProps = {
  onClick: Function;
  isActive: boolean;
};
function BurgerButton({ onClick, isActive }: BurgerButtonProps) {
  const topRef = useRef<HTMLSpanElement>(null);
  const midRef = useRef<HTMLSpanElement>(null);
  const botRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const top = topRef.current;
    const mid = midRef.current;
    const bot = botRef.current;

    if (!top || !mid || !bot) return;

    if (isActive) {
      gsap.to(top, {
        rotate: 45,
        y: 6,
        duration: 0.2,
      });
      gsap.to(mid, {
        x: -10,
        duration: 0.2,
        ease: "power1",
        opacity: 0,
      });
      gsap.to(bot, { rotate: -45, y: -6, duration: 0.2 });
    } else {
      gsap.to(top, { rotate: 0, duration: 0.2, y: 0 });
      gsap.to(mid, { x: 0, duration: 0.2, ease: "power1", opacity: 1, top: 0 });
      gsap.to(bot, { rotate: 0, duration: 0.2, y: 0 });
    }
  }, [isActive]);

  const handleOnclick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleOnclick}
      className="group w-9 flex flex-col gap-1 justify-center p-2 md:hidden isolate"
    >
      <span ref={topRef} className="w-full h-0.5 bg-gray-400"></span>
      <span ref={midRef} className="w-full h-0.5 bg-gray-400"></span>
      <span ref={botRef} className="w-full h-0.5 bg-gray-400"></span>
    </button>
  );
}

export default BurgerButton;
