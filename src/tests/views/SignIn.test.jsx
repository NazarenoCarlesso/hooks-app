import { render, screen } from '@testing-library/react'
import { UserContext } from '../../context/UserContext'
import { SignIn } from '../../views/SignIn'

describe('pruebas en el <SignIn />... ', () => {
  test('debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <SignIn />
      </UserContext.Provider>
    )
    // screen.debug()
    expect(screen.getByText('Sign In')).toBeTruthy()
  })
})
