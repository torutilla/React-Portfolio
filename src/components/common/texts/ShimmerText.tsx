type ShimmerTextProps = {
  text: string;
  size: "sm" | "md" | "lg";
};

function ShimmerText({ text, size }: ShimmerTextProps) {
  return (
    <h1
      data-text={text}
      className={`relative font-extrabold text-${size} text-4xl md:text-5xl lg:text-6xl
        font-title
        after:bg-linear-to-r after:from-transparent 
        after:via-white/50 after:text-transparent
        after:to-transparent after:animate-shimmer after:bg-size-[200%_200%] 
        after:absolute after:bg-clip-text after:inset-0
        after:content-[attr(data-text)] after:z-999 cursor-text after:cursor-text`}
    >
      {text}
    </h1>
  );
}

export default ShimmerText;
