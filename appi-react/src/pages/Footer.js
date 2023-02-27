import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='content'>

            <div className='footer'>
                <img className='logo-footer' src={"/logo-footer.svg"} alt={'Footer Logo'}/>
                <img className='droit-reserve' src={"/droit-reserve.svg"} alt={''}/>
            </div>
        </div>
    )
}

export default Footer