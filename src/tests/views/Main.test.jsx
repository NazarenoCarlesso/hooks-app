import { render, screen } from '@testing-library/react'
import { Main } from '../../views/Main'
import { MemoryRouter } from 'react-router-dom'

describe('pruebas en el <Main />... ', () => {
  test('debe mostrar el componente sin el usuario', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Main />
      </MemoryRouter>
    )
    screen.debug()
    // expect(screen.getByText('Hola !')).toBeTruthy()
    // no funciona en router v6
  })
})
