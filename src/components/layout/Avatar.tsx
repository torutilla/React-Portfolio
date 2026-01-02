type AvatarProps = {
  imgSrc: string;
  alt?: string;
  ref?: React.RefObject<HTMLDivElement | null> | null;
};
function Avatar({ imgSrc, alt = "", ref = null }: AvatarProps) {
  return (
    <div className="overflow-hidden">
      <div ref={ref} className="size-24 rounded-full overflow-clip">
        <img src={imgSrc} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Avatar;
