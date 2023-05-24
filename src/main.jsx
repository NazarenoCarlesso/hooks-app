import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'
import { Home } from './views/Home'
import { About } from './views/About'
import { SignIn } from './views/SignIn'
import { Main } from './views/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/home',
        element: <Home />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/signin',
        element: <SignIn />
      }
    ]
  }, {
    path: '/*',
    element: <Navigate to='/home' />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </>
)
