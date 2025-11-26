import gsap from "gsap";
import { useRef, useState } from "react";
type BurgerButtonProps = {
  onClick: Function;
};
function BurgerButton({ onClick }: BurgerButtonProps) {
  const topRef = useRef<HTMLSpanElement>(null);
  const midRef = useRef<HTMLSpanElement>(null);
  const botRef = useRef<HTMLSpanElement>(null);

  const [active, setActive] = useState(false);
  const handleOnclick = () => {
    const top = topRef.current;
    const mid = midRef.current;
    const bot = botRef.current;

    if (!top || !mid || !bot) return;
    onClick();
    if (!active) {
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

    setActive(!active);
  };
  return (
    <button
      onClick={handleOnclick}
      className="group w-10 flex flex-col gap-1 border justify-center p-2 z-999 md:hidden"
    >
      <span ref={topRef} className="w-full h-0.5 bg-gray-400"></span>
      <span ref={midRef} className="w-full h-0.5 bg-gray-400"></span>
      <span ref={botRef} className="w-full h-0.5 bg-gray-400"></span>
    </button>
  );
}

export default BurgerButton;
