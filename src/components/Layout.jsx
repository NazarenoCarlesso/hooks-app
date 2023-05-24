import { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../hooks/useCounter'
import useFetch from '../hooks/useFetch'

export const Layout = () => {
  const { counter, add, subs } = useCounter(1)
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const { quote, author } = !!data && data[0]

  const Quote = ({ quote, author }) => {
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
      // console.log(pRef.current.getBoundingClientRect().width)
      const { width, height } = pRef.current.getBoundingClientRect()
      setBoxSize({ width, height })
    }, [])

    return (
      <>
        <blockquote
          style={{ display: 'flex' }}
        >
          <p ref={pRef}>{quote}</p>
          <footer>~ {author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
      </>
    )
  }

  return (
    <>
      <h1>BreakingBad Quotes {counter}</h1>
      <hr />
      <button disabled={isLoading} onClick={add}>+1</button>
      <button disabled={isLoading} onClick={subs}>-1</button>
      {
        isLoading
          ? <h2>Loading...</h2>
          : <Quote author={author} quote={quote} />
      }
    </>
  )
}
