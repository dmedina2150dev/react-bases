import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({ maxCount = 1 }) => {

    const [counter, setCounter] = useState(5);

    // const elementToAnimate = useRef<HTMLHeadingElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementToAnimate = useRef<any>(null);

    const tl = useRef( gsap.timeline() );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, maxCount));
    }

    useLayoutEffect(() => { 
        // TODO: Es recomendable usar este efecto Layout para asegurarnos de que se ejecute despues de construido el HTML
        console.log(elementToAnimate.current);
        
        if ( !elementToAnimate.current ) return;
        
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
                .pause();

    }, []);

    useEffect(() => {
        // if(counter < maxCount) return;
        tl.current.play(0);

    }, [counter]);

    

    return {
        counter,
        handleClick,
        elementToAnimate
    }
}
