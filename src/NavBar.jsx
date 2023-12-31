import './NavBar.css'
import { Link } from "react-router-dom"

let isMenuOpen = false
const navLinks = [
    {id:"npcLink", label:"NPCs", route:"/NPC"},
    {id:"initLink", label:"Initiative", route:"/Init"},
]

// convert this to .ts to type safe the link objects?
export default function NavBar(props) {
    
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-container">
                    <div className="nav-title">Kate's RPG Utilities</div>
                    <button onClick={() => {toggleMenu(!isMenuOpen)}} className="burger-menu">☰</button>
                </div>

                <div className="nav-link-container">
                    {
                        navLinks.map(link => {
                            return (renderLink(link))
                        })
                    }
                </div>
            </nav>
        </header>
    )
}

function renderLink(linkObj) {
    return (
        <Link id={linkObj.id} key={linkObj.id} className="nav-link" onClick={() => {handleClickLink(linkObj.id)}} to={linkObj.route}>{linkObj.label}</Link>
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
    document.querySelector(`#${linkId}`).classList.add('active')
}