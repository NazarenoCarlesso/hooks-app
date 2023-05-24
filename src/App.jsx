import './App.css'
import { MemorizeHook } from './components/MemorizeHook'
// import { Memorize } from './components/Memorize'
// import { Layout } from './components/Layout'
// import { MultipleCustom } from './components/MultipleCustom'
// import { FormCustom } from './components/FormCustom'
// import { SimpleForm } from './components/SimpleForm'
// import { Counter } from './components/Counter'
// import { CounterCustom } from './components/CounterCustom'
// import { FocusScreen } from './components/FocusScreen'

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hooks App</h1>
      <MemorizeHook />
    </div>
  )
}

export default App
