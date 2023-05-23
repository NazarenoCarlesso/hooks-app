import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setState({
        ...state,
        data,
        isLoading: false,
        hasError: null
      }))
  }

  useEffect(() => {
    setState({ data: null, isLoading: true, hasError: null })
    getFetch()
  }, [url])

  return { ...state }
}

export default useFetch
