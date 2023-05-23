import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  /*
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  */

  const handleAdd = () => {
    setCounter(counter + 1)
    /*
    setCounter(state => ({
      ...state,
      counter1: counter1 + 1
      // counter2: counter2 + 1,
      // counter3: counter3 + 1
    }))
    */
  }

  const handleSub = () => {
    setCounter(counter - 1)
    /*
    setCounter(state => ({
      ...state,
      counter1: counter1 - 1
      // counter2: counter2 - 1,
      // counter3: counter3 - 1
    }))
    */
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      {/*
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <h1>Counter 3: {counter3}</h1>
      */}
      <hr />
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
    </>
  )
}
