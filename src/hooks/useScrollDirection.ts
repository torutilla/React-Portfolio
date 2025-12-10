import { useEffect, useRef, useState } from "react";

export function useScrollDirection(threshold: number = 10){
    const [direction, setDirection] = useState<String>("");
    const prevScrollRef = useRef(0);
    useEffect(()=>{
        const handleScroll = ()=>{
            const current = window.scrollY;
            const prev = prevScrollRef.current;
            const diff = current - prev;

            if(Math.abs(diff) > threshold){
                setDirection(diff > 0? "down": "up");
                prevScrollRef.current = current;
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return direction;
}