import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import NPCBuilder from './npc/NPCBuilder.jsx'
import InitiativeTracker from './InitiativeTracker.jsx'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing.jsx'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="main-section">
        <Routes>
          <Route path="/" element={<NPCBuilder/>} />
          <Route path="/NPC" element={<NPCBuilder/>} />
          <Route path="/Init" element={<InitiativeTracker/>} />
        </Routes>
      </div>
    </>
  )
}

export default App