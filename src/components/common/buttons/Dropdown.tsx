import React, { useLayoutEffect, useRef, useState } from "react";
import useRippleAnimation from "../../../hooks/useRippleAnimation.ts";
import FillButton from "./FillButton.tsx";
import gsap from "gsap";

export type DropdownItem = {
  heading: string;
  subtitle?: string | undefined;
  onClick: () => void;
};
type DropdownProps = {
  content: string;
  items: DropdownItem[];
};

function Dropdown({ content, items }: DropdownProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);
  const [open, setOpen] = useState(false);
  const handleItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    onClick?: () => void,
  ) => {
    const el = itemRefs.current[index];
    const ripple = useRippleAnimation(el, 1);
    ripple(e);

    onClick?.();
  };
  useLayoutEffect(() => {
    const dropdown = dropdownRef.current;
    tl.current = gsap.timeline({
      paused: true,
    });
    tl.current
      .to(dropdown, {
        scaleY: "100%",
        duration: 0.2,
      })
      .to(itemRefs.current, { translateX: "0%", duration: 0.2, stagger: 0.3 })
      .to(".separator", { translateX: "0%", duration: 0.2, stagger: 0.3 }, "<");
  }, []);

  const handleButtonClick = () => {
    if (open) {
      tl.current?.reverse();
    } else {
      tl.current?.play();
    }
    setOpen((open) => !open);
  };

  const handleButtonBlur = () => {
    if (open) {
      tl.current?.reverse();
      setOpen(false);
    }
  };
  return (
    <div className="relative flex flex-col gap-3 items-start">
      <FillButton onclick={handleButtonClick} onBlur={handleButtonBlur}>
        {content}
      </FillButton>
      <div
        ref={dropdownRef}
        className="top-full mt-2 absolute border border-gray-400/75 bg-black/20 backdrop-blur-3xl rounded-2xl overflow-clip flex flex-col w-56 scale-y-0 origin-top"
      >
        {items.map((item, i) => (
          <React.Fragment key={item.heading}>
            <div
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onClick={(e) => handleItemClick(e, i, item.onClick)}
              className="relative flex flex-col  cursor-pointer overflow-hidden p-3 -translate-x-full"
            >
              <p className="text-accent font-subtitle font-bold select-none">
                {item.heading}
              </p>
              {item.subtitle && (
                <p className="text-gray-400 font-body select-none text-xs">
                  {item.subtitle}
                </p>
              )}
            </div>
            {i !== items.length - 1 && (
              <div className="separator h-px bg-white/15 my-2 -translate-x-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
