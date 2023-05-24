import { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'
import { Small } from './Small'

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(`Ahi vamos... ${iterationNumber}`)
  }

  return `${iterationNumber} n° DONE!!!`
}

export const MemorizeHook = () => {
  const { counter, add } = useCounter(4000)
  const [show, setShow] = useState(true)

  const memoValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Memorize | Counter <Small value={counter} /></h1>
      <hr />

      {/* <h4>{heavyStuff(counter)}</h4> */}
      <h4>{memoValue}</h4>

      <button onClick={add}>
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
