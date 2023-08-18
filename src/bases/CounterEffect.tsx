import { useEffect, useState } from "react"

const MAXIMUM_COUNT = 20;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
      console.log('%cse llego al valor maximo','color: red; background-color: black;');
    }, [counter])
    

    return (
        <>
            <h1> CounterEffect: { counter } </h1>

            <button onClick={ handleClick }>
                +1
            </button>

        </>
    )
}
