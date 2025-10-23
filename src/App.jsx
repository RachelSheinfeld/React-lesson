import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonDetails from './componnt/PersonDetails'
import RenderingList from './componnt/RenderingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PersonDetails name  = "רחל" age={18} />
     <RenderingList></RenderingList>

    </>
   
  )
}

export default App
