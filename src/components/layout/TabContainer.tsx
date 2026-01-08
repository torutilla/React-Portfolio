import gsap from "gsap";
import { useEffect as useLayoutEffect, useRef, useState } from "react";
import { getTextClasses, type TextStyle } from "../../types/theme.ts";
import { ScrollTrigger } from "gsap/all";
type Tab = {
  heading: React.ReactNode;
  content: React.ReactNode;
};
type TabContainerProps = {
  tabs: Tab[];
  headingStyle?: TextStyle;
  dynamicHeight?: boolean;
};
function TabContainer({
  tabs,
  headingStyle = { size: "md", variant: "title", color: "text" },
  dynamicHeight = false,
}: TabContainerProps) {
  const [currentTabIndex, setCurrentTab] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentElementRef = useRef<(HTMLDivElement | null)[]>([]);
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const activeEl = currentElementRef.current[currentTabIndex];
    if (!wrapper || !container || !activeEl) return;

    gsap.to(wrapper, {
      xPercent: -currentTabIndex * 100,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
    if (dynamicHeight) gsap.to(container, { height: activeEl.offsetHeight });
  }, [currentTabIndex]);
  const handleOnClick = (newIndex: number) => {
    setCurrentTab(newIndex);
  };
  return (
    <div className="w-full h-full flex flex-col gap-1">
      <div className=" bg-black/30 rounded-full lg:rounded-lg p-1 border border-white/20 w-fit flex gap-3">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClick(index)}
              className={`${getTextClasses(
                headingStyle
              )} cursor-pointer p-1.5 rounded-full lg:rounded-md ${
                currentTabIndex == index
                  ? "text-text bg-neutral-600"
                  : "text-white/40"
              }`}
            >
              {tab.heading}
            </button>
          );
        })}
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden w-full bg-black/30 rounded-lg border-white/20 border "
      >
        <div className="flex" ref={wrapperRef}>
          {tabs.map((tab, index) => {
            return (
              <div
                ref={(el) => {
                  currentElementRef.current[index] = el;
                }}
                className="w-full h-fit shrink-0 p-4"
                key={index}
              >
                {tab.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TabContainer;
