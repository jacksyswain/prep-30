import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './comps/Counter'
import './App.css'
import CountryFlag from './comps/CountryFlag'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <CountryFlag/>
    </>
  )
}

export default App
