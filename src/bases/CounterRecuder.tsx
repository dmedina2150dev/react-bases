import { useReducer } from 'react';

interface CounterState {
    counter: number;
    previus: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    changes: 0,
    previus: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch(action.type) {
        case 'increaseBy':
            return {
                counter: state.counter + action.payload.value,
                changes: state.changes + 1,
                previus: state.counter,
            }
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previus: 0,
            }
            
        default:
            return state;
    }
}


export const CounterReducerComponent = () => {

    //* const [state, dispatch] = useReducer(ElREDUCER, INITIAL_STATE, LAZYLOAD_STATE);
    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({ type: 'reset' });
    }

    const increaseBy = (counter: number) => {
        dispatch({ type: 'increaseBy', payload: { value: counter }});
    }

    return (
        <>
            <h1> Counter Reducer: </h1>
            <pre>
                { JSON.stringify( counterState, null, 2 ) }
            </pre>

            <button onClick={ () => increaseBy(1) }>
                +1
            </button>
            <button onClick={ () => increaseBy(5) }>
                +5
            </button>
            <button onClick={ () => increaseBy(10) }>
                +10
            </button>
            
            <button onClick={ handleReset }>
                reset
            </button>

        </>
    )
}
