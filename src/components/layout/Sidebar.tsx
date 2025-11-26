import gsap from "gsap";
import { useEffect, useRef } from "react";

type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      gsap.to(ref.current, { x: 0, duration: 0.2 });
    } else {
      gsap.to(ref.current, { x: 500, duration: 0.2 });
    }
  }, [isOpen]);
  return (
    <div className="absolute h-screen w-full overflow-hidden">
      <div
        ref={ref}
        className="bg-background absolute right-0 w-1/2 h-full z-40 transition-all origin-right"
      ></div>
    </div>
  );
}

export default Sidebar;
