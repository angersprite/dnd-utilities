import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import NPCBuilder from './NPCBuilder.jsx'
import InitiativeTracker from './InitiativeTracker.jsx'
import ExpTracker from './ExpTracker.jsx'
import Notes from './Notes.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import UserProfile from './UserProfile.jsx'
import RecoverPW from './RecoverPW.jsx'
import RecoverName from './RecoverName.jsx'
import DiceRoller from './DiceRoller.jsx'
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
          <Route path="/Dice" element={<DiceRoller/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/UserProfile" element={<UserProfile/>} />
          <Route path="/RecoverPW" element={<RecoverPW/>} />
          <Route path="/RecoverName" element={<RecoverName/>} />
        </Routes>
      </div>
    </>
  )
}

export default App