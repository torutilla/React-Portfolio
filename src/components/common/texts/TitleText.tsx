import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

type TitleTextProps = {
  text: string;
  triggerTarget: string;
};
function TitleText({ text, triggerTarget }: TitleTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  useLayoutEffect(() => {
    const p = ref.current;
    if (!p) return;
    gsap.fromTo(
      p,
      { y: p?.offsetHeight },
      {
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: triggerTarget,
          start: "top bottom-=20",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, [triggerTarget]);
  return (
    <div>
      <div className="overflow-hidden">
        <p ref={ref} className="block text-text text-title font-title">
          {text}
        </p>
      </div>
    </div>
  );
}

export default TitleText;
