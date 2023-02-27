import React from 'react';

import'./thumb.css' 
const Thumb = (props) => {
    return <article
        className="thumb"
        style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.image}) center`
        }}
    >
        <h2>{props.title}</h2>
       
    </article>
}

export default Thumb;