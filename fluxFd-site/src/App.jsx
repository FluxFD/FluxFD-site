import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-serif text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
    </>
  )
}

export default App
