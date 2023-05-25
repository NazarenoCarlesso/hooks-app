import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustom } from '../../components/MultipleCustom'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en el <MultipleCustom />... ', () => {
  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    add: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })
    render(<MultipleCustom />)
    // screen.debug()
    expect(screen.getByText('BreakingBad Quotes 1'))
    expect(screen.getByText('Loading...'))

    const nextButton = screen.getByRole('button', { name: '+1' })
    // console.log(nextButton.disabled)
    expect(nextButton.disabled).toBeTruthy()

    const prevButton = screen.getByRole('button', { name: '-1' })
    expect(prevButton.disabled).toBeTruthy()
  })

  test('debe de mostar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{
        quote: "I'm not a criminal. I'm a criminal lawyer.",
        author: 'Saul Goodman'
      }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustom />)
    // screen.debug()
    // expect(screen.getByRole('blockquote'))
    expect(screen.getByText("I'm not a criminal. I'm a criminal lawyer."))
    expect(screen.getByText('Saul Goodman'))
  })

  test('debe llamar a la funcion incrementar', () => {
    useFetch.mockReturnValue({
      data: [{
        quote: "I'm not a criminal. I'm a criminal lawyer.",
        author: 'Saul Goodman'
      }],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustom />)
    // screen.debug()
    const nextButton = screen.getByRole('button', { name: '+1' })
    fireEvent.click(nextButton)
    expect(mockIncrement).toHaveBeenCalled()
    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
