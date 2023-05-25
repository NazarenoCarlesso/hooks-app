import { act, renderHook } from '@testing-library/react'
import useCounter from '../../hooks/useCounter'

describe('useCounter testing... ', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    // console.log(result)
    expect(result.current.counter).toBe(0)
    expect(typeof result.current.add).toBe('function')
    expect(result.current.subs).toEqual(expect.any(Function))
  })

  test('debe generar el contador con el valor 100', () => {
    const { result } = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })

  test('debe aumentar el contador', () => {
    const { result } = renderHook(() => useCounter(10))
    act(() => result.current.add())
    expect(result.current.counter).toBe(11)
    act(() => result.current.add())
    act(() => result.current.add())
    act(() => result.current.add(4))
    expect(result.current.counter).toBe(17)
  })

  test('debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(10))
    act(() => result.current.subs())
    expect(result.current.counter).toBe(9)
    act(() => result.current.subs(4))
    act(() => result.current.subs(4))
    act(() => result.current.subs(4))
    expect(result.current.counter).toBe(-3)
  })

  test('debe reiniciar el contador', () => {
    const { result } = renderHook(() => useCounter(10))
    act(() => result.current.add(7))
    act(() => result.current.subs())
    expect(result.current.counter).toBe(16)
    act(() => result.current.reset())
    expect(result.current.counter).toBe(10)
  })
})
