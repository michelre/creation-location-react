import React from 'react'
import './host.css'

function Host({host}) {
    return (
        <div className='host'>
            <span>{host.name}</span>
            <img src={host.picture}/>

        </div>

    )
}

export default Host