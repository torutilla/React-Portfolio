import { useRef } from "react";
import useSlideAnimation from "../../../hooks/useSlideAnimation.ts";
import { getTextClasses, type TextStyle } from "../../../types/theme.ts";

type SlideTextProps = {
  style: TextStyle;
  children?: React.ReactNode;
  triggerOverrides?: ScrollTrigger.Vars;
};

function SlideAnimationText({
  style,
  children,
  triggerOverrides,
}: SlideTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  useSlideAnimation(ref, triggerOverrides);

  return (
    <div>
      <div className="overflow-hidden">
        <p ref={ref} className={getTextClasses(style)}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default SlideAnimationText;
