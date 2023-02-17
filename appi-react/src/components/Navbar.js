import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import'./Logo'

export default function Navbar() {
  return (
    
    <nav className='nav'>
    
        <Link to="/" className='accueil'>Accueil</Link>
        <Link to="/APropos" className='propo'>A propos</Link>
    </nav>
    
  )
}