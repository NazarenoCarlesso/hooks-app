import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Home = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <h1>Home</h1>
      <hr />
      <h3>Hola {user}!</h3>
    </>
  )
}
