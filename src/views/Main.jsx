import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { UserProvider } from '../context/UserContext'
import '../App.css'

export const Main = () => {
  return (
    <UserProvider>
      <h1>Main</h1>
      <NavBar />
      <hr />
      <Outlet />
    </UserProvider>
  )
}
