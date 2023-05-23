import useForm from '../hooks/useForm'

export const FormCustom = () => {
  const {
    username,
    email,
    password,
    handleInputChange,
    handleClear,
    handleCapitalize
  } = useForm({
    username: '',
    password: '',
    email: ''
  })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <form
        onSubmit={handleInputChange}
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 220 }}
      >
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleInputChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
          required={false}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCapitalize}>Capitalize</button>
      </form>
    </>
  )
}
