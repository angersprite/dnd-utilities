import './NavBar.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

let isMenuOpen = false;

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="nav-title">Kate's RPG Utilities</div>
                <button onClick={() => {toggleMenu(!isMenuOpen)}} className="burger-menu">☰</button>
            </div>

            <div className="nav-link-container">
                <Link id="npcLink" className="nav-link" onClick={() => {handleClickLink('#npcLink')}} to={`/NPC`}>NPCs</Link>
                <Link id="initLink" className="nav-link" onClick={() => {handleClickLink('#initLink')}} to={`/Init`}>Initiative</Link>
                <Link id="expLink" className="nav-link" onClick={() => {handleClickLink('#expLink')}} to={`/Exp`}>Exp</Link>
                <Link id="notesLink" className="nav-link" onClick={() => {handleClickLink('#notesLink')}} to={`/Notes`}>Notes</Link>
            </div>
        </nav>
    )
}

function toggleMenu(toggleVal) {
    isMenuOpen = toggleVal
    if (toggleVal) {
        document.querySelector(".nav-link-container").classList.add('open')
    }
    else {
        document.querySelector(".nav-link-container").classList.remove('open')
    }
}

function handleClickLink(linkId) {
    toggleMenu(false);
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active')
    })
    document.querySelector(linkId).classList.add('active')
}