import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { getTextClasses, type TextStyle } from "../../types/theme.ts";

type Tab = {
  heading: React.ReactNode;
  content: React.ReactNode;
};
type TabContainerProps = {
  tabs: Tab[];
  headingStyle?: TextStyle;
};
function TabContainer({
  tabs,
  headingStyle = { size: "md", variant: "title", color: "text" },
}: TabContainerProps) {
  const [currentTabIndex, setCurrentTab] = useState(0);
  const previousTabIndex = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevTab = previousTabIndex.current;
    const wrapper = wrapperRef.current;
    if (!wrapper || prevTab == currentTabIndex) return;

    gsap.to(wrapper, {
      xPercent: -currentTabIndex * 100,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentTabIndex]);
  const handleOnClick = (newIndex: number) => {
    previousTabIndex.current = currentTabIndex;
    setCurrentTab(newIndex);
  };
  return (
    <div className="w-full h-full">
      <div className="flex gap-md justify-evenly">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClick(index)}
              className={`${getTextClasses(headingStyle)} cursor-pointer ${
                currentTabIndex == index ? "text-text" : "text-white/40"
              }`}
            >
              {tab.heading}
            </button>
          );
        })}
      </div>
      <div className="bg-white/60 h-0.5 w-full"></div>
      <div className="overflow-hidden w-full h-full">
        <div className="flex" ref={wrapperRef}>
          {tabs.map((tab, index) => {
            return (
              <div className="w-full shrink-0 h-full mt-3" key={index}>
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
