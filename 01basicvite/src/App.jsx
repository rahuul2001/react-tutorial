import { useState } from 'react';
import Youtube from './Youtube';

function App() {
  const [count, setCount] = useState(0)

  const username = "Rahul"
  return (
    <>
      <h1>Vite react app {2+6} {"        "} {username}</h1>
      <Youtube/>
    </>
  )
}

export default App
