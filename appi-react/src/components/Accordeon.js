import React from 'react'
import {useState} from 'react'
import './Accordeon.css'
import arrowTop from './arrow-top.svg'

function Accordeon({title, content}) {
    const [active, setActive] = useState(true)

    const handleToggle = e => {
        setActive(!active)
    }

    return (
        <nav className={`accordeon ${active ? 'active': ''}`}>
            <div className="accordeon-title" onClick={handleToggle}>
                {title}
                <img src={arrowTop} alt={''} className={'arrow'}/>
            </div>

            <div className="accordeon-content">
                {content instanceof Array ? <ul>
                    {content.map(e => <li key={e}>{e}</li>)}
                </ul> : <p>{content}</p>}
            </div>

        </nav>

    )
}

export default Accordeon



