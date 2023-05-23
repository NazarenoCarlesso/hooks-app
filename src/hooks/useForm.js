import { useState } from 'react'

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const handleChange = (event) => {
    const { name: key, value } = event.target
    setFormState({
      ...formState,
      [key]: value
    })
  }

  const handleClear = (event) => {
    event.preventDefault()
    setFormState(initialForm)
  }

  const handleCapitalize = (event) => {
    event.preventDefault()
    const keys = Object.keys(formState)
    const capitalizedForm = {}
    keys.forEach(key => { capitalizedForm[key] = formState[key].toUpperCase() })
    // console.log(formState)
    // console.log(capitalizedForm)
    setFormState(capitalizedForm)
  }

  return {
    ...formState,
    handleInputChange: handleChange,
    handleClear,
    handleCapitalize
  }
}

export default useForm
