import React from 'react'
import './host.css'

function Host({host}) {
    return (
        <div className='host'>
            <span>{host.name}</span>
            <img src={host.picture} alt={`Avatar ${host.name}`}/>

        </div>

    )
}

export default Host