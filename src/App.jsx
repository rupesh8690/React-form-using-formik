import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Counter from './Counter'
import Jokes from './Joker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/>
      <Counter/> */}
      <Jokes/>
    </>
  )
}

export default App
