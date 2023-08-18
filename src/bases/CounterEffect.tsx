import {  useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUM_COUNT));
    }

    useLayoutEffect(() => { // TODO: Es recomendable usar este efecto Layout para asegurarnos de que se ejecute despues de construido el HTML
        if (counter < 10 ) return;
        console.log('%cse llego al valor maximo','color: red; background-color: black;');
        
        // TODO: Lo recomendado por gsap
        // Crear un timeline

        const timeline = gsap.timeline();

        timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

        // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
        //     gsap.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
        // })

    }, [counter]);
    

    return (
        <>
            <h1> CounterEffect:  </h1>
            <h2 ref={ counterElement }>{ counter }</h2>
            <button onClick={ handleClick }>
                +1
            </button>

        </>
    )
}
