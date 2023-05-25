import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue)

  const add = (value = 1) => { setCounter(counter + value) }

  const subs = (value = 1) => { setCounter(counter + -value) }

  const reset = () => { setCounter(initialValue) }

  return { counter, add, subs, reset }
}

export default useCounter
