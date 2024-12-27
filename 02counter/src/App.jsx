import { useState } from 'react'
import './App.css'

function App() {

  const [counter, s1Counter] = useState(15)

  const addValue = () => {
    s1Counter(counter+1)
    console.log(counter)
  }

  const subValue = () => {
    s1Counter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <h1>Me learning react!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {"   "}
      <button onClick={subValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
