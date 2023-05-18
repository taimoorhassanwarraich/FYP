import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Layout from './Pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Layout/>
    </div>
  )
}

export default App
