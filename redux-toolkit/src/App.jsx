import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'
import CountryFlag from '../../react-basics/react-components/src/comps/CountryFlag'


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
