import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DropdownMenu from './DropdownMenu'
import Homepage from './Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage/>
     <DropdownMenu/>
    </>
  )
}

export default App
