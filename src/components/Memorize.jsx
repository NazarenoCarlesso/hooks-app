import { useState } from 'react'
import useCounter from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
  const { counter, add } = useCounter()
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Memorize | Counter <Small value={counter} /></h1>
      <hr />

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
