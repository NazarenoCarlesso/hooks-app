import { NavLink } from 'react-router-dom'

const isActive = ({ isActive }) => {
  return isActive ? 'nav-active' : ''
}

export const NavBar = () => {
  return (
    <>
      <NavLink
        to='/home'
        className={isActive}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={isActive}
      >
        About
      </NavLink>
      <NavLink
        to='/signin'
        className={isActive}
      >
        SignIn
      </NavLink>
    </>
  )
}
