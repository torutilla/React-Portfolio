type AvatarProps = {
  imgSrc: string;
  alt?: string;
};
function Avatar({ imgSrc, alt = "" }: AvatarProps) {
  return (
    <div className="size-24 rounded-full overflow-clip">
      <img src={imgSrc} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default Avatar;
