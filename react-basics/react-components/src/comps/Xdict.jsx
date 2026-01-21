import React, { useState } from 'react'

const dict = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
]

function Xdict() {
  const [input, setInput] = useState("")
  const [descript, setDiscript] = useState("")

  const handleSearch = () => {
    const result = dict.find(
      item => item.word.toLowerCase() === input.toLowerCase()
    )

    if (result) {
      setDiscript(result.meaning)
    } else {
      setDiscript("Word not found in dictionary.")
    }
  }

  return (
    <div>
      <h1>Modictionary</h1>

      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <h2>Description: {descript}</h2>
    </div>
  )
}

export default Xdict
