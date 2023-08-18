import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';


import { doIncreaseBy, doReset } from './actions/actions';



const INITIAL_STATE: CounterState = {
    counter: 0,
    changes: 0,
    previus: 0,
}

export const CounterReducerComponent = () => {

    //* const [state, dispatch] = useReducer(ElREDUCER, INITIAL_STATE, LAZYLOAD_STATE);
    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch( doReset() );
    }

    const increaseBy = (counter: number) => {
        dispatch( doIncreaseBy( counter ) );
    }

    return (
        <>
            <h1> Counter Reducer Segmentado: </h1>
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
