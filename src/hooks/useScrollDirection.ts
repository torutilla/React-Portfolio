import { useEffect, useRef, useState } from "react";
type ScrollDirectionType = {
    direction: "up" | "down";
    currentScroll: number;
}
export function useScrollDirection(threshold: number = 10){
    const [direction, setDirection] = useState<ScrollDirectionType>({direction: "up", currentScroll: 0});
    const prevScrollRef = useRef(0);
    const lastDirection = useRef<"up" | "down">("up");
    useEffect(()=>{
        const handleScroll = ()=>{
            const current = window.scrollY;
            const prev = prevScrollRef.current;
            const diff = current - prev;


            console.log(current);
            if(Math.abs(diff) > threshold){
                const newDirection = diff > 0 ? "down": "up";
                
                if(newDirection !== lastDirection.current){
                    lastDirection.current = newDirection;
                    setDirection({
                        direction: newDirection,
                        currentScroll: current,
                    });
                }else{
                    setDirection(prev=> ({...prev, currentScroll:current}))
                }
                prevScrollRef.current = current;
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return direction;
}