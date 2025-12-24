import gsap from "gsap"
export default function useRippleAnimation(element: HTMLElement | null, speed = 1.5){
    return (event: React.MouseEvent) =>{
        const el = element;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;


        const span = document.createElement('span');
        
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.className = "absolute pointer-events-none rounded-full bg-accent lg:bg-gray-300/20 w-32 h-32 -translate-x-1/2 -translate-y-1/2 opacity-0-z-1";
        el.appendChild(span);
        

        gsap.killTweensOf(span);
        gsap.set(span, { scale: 0, opacity: 1 });
    
        gsap.to(span, {
          scale: 4,
          opacity: 0,
          duration: speed,
          ease: "power2.out",
        });
    }
    }
