import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from './Logo'

export default function Navbar() {
    return (

        <nav className='nav'>
            <Logo/>
            <div>
                <Link to="/" className='accueil'>Accueil</Link>
                <Link to="/APropos" className='propo'>A propos</Link>
            </div>
        </nav>

    )
}