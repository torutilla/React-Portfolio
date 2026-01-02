export type ColorOptions = "text" | "accent" | "primary" | "dark";
export type FontVariant = "title" | "subtitle" | "body";
export type TextSize = "sm" | "md" | "lg" | "xl" | "2xl";
export const variantMap: Record<FontVariant, string> = {
    title: "font-title",
    subtitle: "font-subtitle",
    body: "font-body",
  };
  
export  const sizeMap: Record<TextSize, string> = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-title",
  };
  
export const colorMap: Record<ColorOptions, string> = {
    text: "text-text",
    dark: "text-black/75",
    accent: "text-accent",
    primary: "text-primary",
  };

export type TextStyle = {
    variant?: FontVariant;
    size?: TextSize;
    color?: ColorOptions;
};

export function getTextClasses(style: TextStyle) {
    const { variant, size, color } = style;
    return `${variantMap[variant ?? "title"]} ${sizeMap[size ?? "2xl"]} ${colorMap[color ?? "text"]}`;
  }
