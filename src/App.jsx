import { useState } from 'react'
import './App.css'
import './Goonr.css'
import NPCBuilder from './NPCBuilder.jsx'
import NPCDisplay from './NPCDisplay.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="goonr-container">
      <NPCBuilder></NPCBuilder>
      <NPCDisplay></NPCDisplay>
    </div>
  )
}

export default App
