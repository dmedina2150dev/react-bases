import { useState } from "react"

interface CounterProps {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 10 }: CounterProps) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (val: number) => {
        setCounterState( ({ counter, clicks }) => ({ counter: counter + val, clicks: clicks + 1 }) );
    }

    return (
        <>
            <h1> CounterBy: { counter } </h1>
            <h1> Clicks: { clicks } </h1>

            <button onClick={ () => handleClick(1) }>+1</button>
            <button onClick={ () => handleClick(5) }>+5</button>

        </>
    )
}
