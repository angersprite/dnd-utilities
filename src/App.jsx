import { useState } from 'react'
import './App.css'
import './Goonr.css'
import NPCBuilder from './NPCBuilder.jsx'
import TitleBar from './TitleBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="goonr-container">
      <TitleBar></TitleBar>
      <NPCBuilder></NPCBuilder>
    </div>
  )
}

export default App