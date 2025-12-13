type ShimmerTextProps = {
  text: string;
};

function HeroTitle({ text }: ShimmerTextProps) {
  return (
    <div className="overflow-hidden">
      <h1
        data-text={text}
        className={`
          text-text
          ml-4 mr-4 relative font-extrabold text-hero whitespace-nowrap leading-tight
        font-title
        after:bg-linear-to-r after:from-transparent 
        after:via-black/70 after:text-transparent
        after:to-transparent after:animate-shimmer after:bg-size-[200%_200%] 
        after:absolute after:bg-clip-text after:inset-0
        after:content-[attr(data-text)] after:z-999 cursor-text after:cursor-text`}
      >
        {text}
      </h1>
    </div>
  );
}

export default HeroTitle;
