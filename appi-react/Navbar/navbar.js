import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/A propos">A propos</Link>
    </nav>
  )
}
