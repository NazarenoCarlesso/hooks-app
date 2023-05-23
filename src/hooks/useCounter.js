import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue)

  const add = () => { setCounter(counter + 1) }

  const subs = () => { setCounter(counter + -1) }

  const reset = () => { setCounter(initialValue) }

  return { counter, add, subs, reset }
}

export default useCounter
