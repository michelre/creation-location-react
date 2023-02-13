import React from 'react'
import {useState} from 'react'
import './Accordeon.css'

function Accordeon({title, content}) {
    const [active, setActive] = useState(true)

    const handleToggle = e => {
        setActive(!active)
    }

    return (
        <nav className={`accordeon ${active ? 'active': ''}`}>
            <div className="accordeon-title" onClick={handleToggle}>
                {title}
                <i className="fa-solid fa-chevron-up"></i>
            </div>

            <div className="accordeon-content">
                {content instanceof Array ? <ul>
                    {content.map(e => <li>{e}</li>)}
                </ul> : <p>{content}</p>}
            </div>

        </nav>

    )
}

export default Accordeon



