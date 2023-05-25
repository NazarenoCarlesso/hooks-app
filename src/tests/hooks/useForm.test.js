import { act, renderHook } from '@testing-library/react'
import useForm from '../../hooks/useForm'

describe('useCounter testing... ', () => {
  const initialForm = {
    name: 'Nazareno',
    email: 'nazareno@gmail.com'
  }

  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    // console.log(result)
    const { name, email, password } = result.current
    expect(name).toBe('Nazareno')
    expect(email).toBe('nazareno@gmail.com')
    expect(password).toBe(undefined)
    // toEqual
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      handleInputChange: expect.any(Function),
      handleClear: expect.any(Function),
      handleCapitalize: expect.any(Function)
    })
  })

  test('debe cambiar el nombre con el input', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { handleInputChange } = result.current

    const input = 'Jorge'
    act(() => handleInputChange({
      target: {
        name: 'name',
        value: input
      }
    }))
    // console.log(result.current)
    expect(result.current.name).toBe('Jorge')
  })

  test('debe realizar el reset del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { handleClear, handleInputChange } = result.current

    const input = 'Jorge'
    act(() => handleInputChange({
      target: {
        name: 'name',
        value: input
      }
    }))
    expect(result.current.name).toBe(input)
    act(() => handleClear(new Event('submit')))
    expect(result.current.name).toBe(initialForm.name)
  })

  test('debe capitalizar el nombre', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { handleCapitalize } = result.current

    act(() => handleCapitalize(new Event('submit')))
    expect(result.current.name).toBe(initialForm.name.toUpperCase())
    expect(result.current.email).toBe(initialForm.email.toUpperCase())
  })
})
