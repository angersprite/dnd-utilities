import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import NPCBuilder from './NPCBuilder.jsx'
import InitiativeTracker from './InitiativeTracker.jsx'
import ExpTracker from './ExpTracker.jsx'
import Notes from './Notes.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="main-section">
        <Routes>
          <Route path="/NPC" element={<NPCBuilder/>} />
          <Route path="/Init" element={<InitiativeTracker/>} />
          <Route path="/Exp" element={<ExpTracker/>} />
          <Route path="/Notes" element={<Notes/>} />
        </Routes>
      </div>
    </>
  )
}

export default App