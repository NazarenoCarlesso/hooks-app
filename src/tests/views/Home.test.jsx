import { render, screen } from '@testing-library/react'
import { Home } from '../../views/Home'
import { UserContext } from '../../context/UserContext'

describe('pruebas en el <Home />... ', () => {
  test('debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Home />
      </UserContext.Provider>
    )
    // screen.debug()
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Hola !')).toBeTruthy()
  })

  test('debe mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user: 'Nazareno' }}>
        <Home />
      </UserContext.Provider>
    )
    // screen.debug()
    expect(screen.getByText('Hola Nazareno!')).toBeTruthy()
  })
})
