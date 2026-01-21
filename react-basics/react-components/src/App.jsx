import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './comps/Counter'
import './App.css'
import CountryFlag from './comps/CountryFlag'
import CountryFlagSearch from './comps/CountryFlagSearch'
import Xform from './comps/Xform'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Xform/>
    </>
  )
}

export default App
