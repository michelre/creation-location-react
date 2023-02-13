import React from 'react';
//import '../styles/Thumb.css';
import'./thumb.css' 
const Thumb = (props) => {//faire une classname
    return <article style={{
        display: 'flex',
        alignItems: 'flex-end',
        color: 'white',
        border: '1px solid ',
        margin: 20,
        padding: 10,
        width: 340,
        height: 340,
        backgroundSize: 'cover',
        borderRadius: 10,
        
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.image}) center` }}
    >
        <h2>{props.title}</h2>
       
    </article>
}

export default Thumb;