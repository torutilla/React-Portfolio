import { useRef } from "react";
import useSlideAnimation from "../../../hooks/useSlideAnimation.ts";
import type {
  ColorOptions,
  FontVariant,
  TextSize,
} from "../../../types/theme.ts";
type TextStyle = {
  variant: FontVariant;
  size: TextSize;
  color?: ColorOptions;
};
type SlideTextProps = {
  style: TextStyle;
  trigger: string;
  children?: React.ReactNode;
  triggerOverrides?: ScrollTrigger.Vars;
};

const variantMap: Record<FontVariant, string> = {
  title: "font-title",
  subtitle: "font-subtitle",
  body: "font-body",
};

const sizeMap: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-title",
};

const colorMap: Record<ColorOptions, string> = {
  text: "text-text",
  dark: "text-black/75",
  accent: "text-accent",
  primary: "text-primary",
};

function SlideAnimationText({
  style,
  trigger,
  children,
  triggerOverrides,
}: SlideTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  useSlideAnimation(trigger, ref, triggerOverrides);

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

function getTextClasses(style: TextStyle) {
  const { variant, size, color } = style;
  return `${variantMap[variant]} ${sizeMap[size]} ${colorMap[color ?? "text"]}`;
}

export default SlideAnimationText;
