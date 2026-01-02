import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type Tab = {
  heading: string;
  content: React.ReactNode;
};
type TabContainerProps = {
  tabs: Tab[];
};
function TabContainer({ tabs }: TabContainerProps) {
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
    console.log(previousTabIndex, currentTabIndex);
  };
  return (
    <div className="w-full h-full">
      <div className="flex gap-md justify-center">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClick(index)}
              className={`font-title cursor-pointer ${
                currentTabIndex == index ? "text-text" : "text-white/40"
              }`}
            >
              {tab.heading}
            </button>
          );
        })}
      </div>
      <div className="bg-white/60 h-0.5 w-full"></div>
      <div className="flex w-full h-full" ref={wrapperRef}>
        {tabs.map((tab, index) => {
          return (
            <div className="min-w-full shrink-0 h-full" key={index}>
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabContainer;
