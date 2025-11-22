type ShimmerTextProps = {
  text: string;
  /** options: small | medium | large */
  size: string;
  baseColor: string;
  shimmerColor: string;
};

function ShimmerText({ text, size, baseColor }: ShimmerTextProps) {
  return <p className={`${size} text-[${baseColor}]`}>{text}</p>;
}

export default ShimmerText;
