import React from 'react'

export default function Star({rating}) {
    const fullStars =  Array.from({length: parseInt(rating)}).map((e, idx) => idx)
    const emptyStars =  Array.from({length: 5 - parseInt(rating)}).map((e, idx) => idx)

    return <div>
        {fullStars.map(e => <i className="fa-solid fa-star" key={`full-${e}`}></i>)}
        {emptyStars.map(e => <i className="fa-regular fa-star" key={`empty-${e}`}></i>)}
    </div>
}
