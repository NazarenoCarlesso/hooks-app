import useFetch from '../hooks/useFetch'
import useCounter from '../hooks/useCounter'

export const MultipleCustom = () => {
  const { counter, add, subs } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  console.log({ data, isLoading, hasError })

  const { quote, author } = !!data && data[0]

  const Quote = ({ quote, author }) => {
    return (
      <blockquote>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
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
