import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()
  // console.log(inputRef)

  const onSetFocus = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        placeholder='Insert name'
      />
      <button onClick={onSetFocus}>
        Set Focus
      </button>
    </>
  )
}
