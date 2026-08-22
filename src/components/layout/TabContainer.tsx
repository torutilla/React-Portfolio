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
  initialTabIndex?: number;
};
function TabContainer({
  tabs,
  headingStyle = { size: "md", variant: "title", color: "text" },
  dynamicHeight = false,
  initialTabIndex = 0,
}: TabContainerProps) {
  const [currentTabIndex, setCurrentTab] = useState(initialTabIndex);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentElementRef = useRef<(HTMLDivElement | null)[]>([]);
  useLayoutEffect(() => {
    setCurrentTab(initialTabIndex);
  }, [initialTabIndex]);

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
  }, [currentTabIndex]);

  const hasInitialized = useRef(false);
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    // First mount: force the strip to the active panel before the first paint
    // so the panel renders edge-to-edge (rather than neighboring panels being
    // clipped by the overflow-hidden container).
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      gsap.set(wrapper, { xPercent: -currentTabIndex * 100 });
    }
  }, [currentTabIndex]);

  const hasSyncedInitialHeight = useRef(false);
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!dynamicHeight) {
      // Fixed-height mode: don't impose a height — let the container size
      // naturally to its content so nothing is clipped.
      gsap.set(container, { height: "auto" });
      return;
    }

    const activeEl = currentElementRef.current[currentTabIndex];
    if (!activeEl) return;

    let disposed = false;
    let lastHeight: number | null = null;

    // Sync the container height to the active panel's content height. The
    // very first measure can happen before web fonts swap in (fallback
    // metrics are different), and panels re-flow on resize, so we re-run this
    // on font/load completion and whenever the panel or container resizes.
    const syncHeight = (immediate = false) => {
      if (disposed) return;
      const target = activeEl.offsetHeight;
      if (target === lastHeight) return;
      lastHeight = target;
      const vars = {
        height: target,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ScrollTrigger.refresh(),
      };
      if (immediate) {
        gsap.set(container, { height: target });
      } else {
        gsap.to(container, vars);
      }
    };

    const firstRender = !hasSyncedInitialHeight.current;
    if (firstRender) {
      hasSyncedInitialHeight.current = true;
      // Pin the container above the first paint so the bottom row of cards is
      // never clipped by the overflow-hidden crop box.
      syncHeight(true);
    } else {
      // Tab switch: animate to the new panel's height.
      syncHeight(false);
    }

    // Re-measure once the web fonts have finished loading and once the window
    // has fully loaded — both can change text metrics and therefore the panel
    // height above the font-swap measure.
    const fontsReady = document.fonts?.ready;
    if (fontsReady) {
      fontsReady.then(() => syncHeight()).catch(() => {});
    }
    const onWindowLoad = () => syncHeight();
    window.addEventListener("load", onWindowLoad);

    // Keep the container height in step if the panel ever reflows later
    // (responsive grid column changes, font swap, etc.).
    const observer = new ResizeObserver(() => syncHeight());
    observer.observe(activeEl);
    observer.observe(container);

    return () => {
      disposed = true;
      window.removeEventListener("load", onWindowLoad);
      observer.disconnect();
    };
  }, [dynamicHeight, currentTabIndex, tabs]);
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
                headingStyle,
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
