import type { SvgIconComponent } from "@mui/icons-material";
type FloatingPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

type FloatingIconButtonProps = {
  icon: SvgIconComponent;
  position: FloatingPosition;
};
function FloatingIconButton({ icon: Icon, position }: FloatingIconButtonProps) {
  const buttonPosition = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }[position];

  return (
    <button
      className={`fixed rounded-full shadow border border-(--border-color) p-3 ${buttonPosition} z-999 cursor-pointer group overflow-clip`}
    >
      <span className="absolute inset-0 scale-0 bg-(--accent-color) origin-center group-hover:scale-100 transition-all duration-300 ease-in-out rounded-full -z-10"></span>
      <Icon className="text-(--border-color)"></Icon>
    </button>
  );
}

export default FloatingIconButton;
