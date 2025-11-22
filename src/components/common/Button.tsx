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
      className="relative
      p-2 border border-(--accent-color) 
      cursor-pointer hover:border-(--accent-color)
      text-(--accent-color) 
      hover:text-(--hover-text-color) 
      transition-all duration-300 ease-in-out
      before:absolute 
      before:inset-0 before:scale-x-0
      before:bg-(--accent-color) 
      before:origin-left
      before:duration-300 before:transition-all
      hover:before:scale-x-100
      before:ease-in-out before:-z-10"
    >
      {Icon && <Icon fontSize="inherit" className="" />}
      {text}
    </button>
  );
}

export default IconButton;
