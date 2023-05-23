import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: ''
  })

  const { username, email } = user

  useEffect(() => { console.log('Mount') }, [])
  // useEffect(() => { console.log('Use Effect') }, [user])
  // useEffect(() => { console.log('Username Changed') }, [username])
  // useEffect(() => { console.log('Email Changed') }, [email])

  const handleChange = (event) => {
    const { name: key, value } = event.target
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert(`Bienvenido ${username}`)
  }

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 220 }}
      >
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
          required={false}
        />
        <button type='submit'>Send</button>

        {username === 'nazareno' && <Message />}
      </form>
    </>
  )
}
