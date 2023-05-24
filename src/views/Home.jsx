import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Home = () => {
  const { hola } = useContext(UserContext)

  return (
    <>
      <h1>Home</h1>
      <hr />
      <h3>Hola {hola}!</h3>
    </>
  )
}
