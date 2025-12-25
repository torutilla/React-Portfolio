import { useRef } from "react";
import useSlideAnimation from "../../../hooks/useSlideAnimation.ts";

type TitleTextProps = {
  text: string;
  triggerTarget: string;
};
function TitleText({ text, triggerTarget }: TitleTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  useSlideAnimation(triggerTarget, ref);

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
