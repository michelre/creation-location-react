import React from 'react'
import { Link } from 'react-router-dom'
//import './Navbar.css'
export default function Navbar() {
  return (
    <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/APropos">A propos</Link>
    </nav>
  )
}