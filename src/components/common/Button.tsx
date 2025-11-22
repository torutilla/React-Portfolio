import type { SvgIconComponent } from "@mui/icons-material";
import { type MouseEventHandler } from "react";
type IconButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: SvgIconComponent;
};

function IconButton({ text, onClick, icon: Icon }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative
      p-2 cursor-pointer
      text-(--accent-color) 
      hover:text-(--hover-text-color) 
      transition-all duration-400 ease-in-out
      before:absolute 
      before:inset-0 before:scale-x-0
      before:bg-(--accent-color) 
      before:origin-left
      before:duration-400 before:transition-all
      hover:before:scale-x-100
      before:ease-in-out before:-z-10"
    >
      {Icon && <Icon fontSize="inherit" className="" />}
      {text}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="0"
          stroke-width="2.5"
          pathLength="100"
          stroke-dasharray="100"
          stroke-dashoffset="0"
          className="stroke-(--accent-color) 
          transition-[stroke-dashoffset] duration-700 
          group-hover:[stroke-dashoffset:100]"
        />
      </svg>
    </button>
  );
}

export default IconButton;
