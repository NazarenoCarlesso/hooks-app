import useCounter from '../hooks/useCounter'

export const CounterCustom = () => {
  const { counter, add, subs, reset } = useCounter(7)

  return (
    <>
      <h1>Counter with Custom Hook: {counter}</h1>
      <hr />
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={subs}>-1</button>
    </>
  )
}
