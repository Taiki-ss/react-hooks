import { useState } from 'react'
import './App.css'
import UseStateEffect from './components/UseStateEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
		  <UseStateEffect />
		  <hr />
    </div>
  )
}

export default App
