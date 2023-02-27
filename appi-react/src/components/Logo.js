import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return  (
    <Link to="/" className='logo'>
   <img src={"/logo-kasa.svg"} alt={'Logo Kasa'}/>
   </Link>
  )
}

export default Logo