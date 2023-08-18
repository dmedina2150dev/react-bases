import { Counter } from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy"
import { CounterEffect } from "./bases/CounterEffect"
import { CounterHook } from "./bases/CounterHook"


function App() {
  return (
    <>
      <Counter initialValue={ 25 }/>
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <CounterHook />
      <hr />
    </>
  )
}

export default App
