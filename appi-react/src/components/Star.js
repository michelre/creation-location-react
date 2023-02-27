import React from 'react'
import './Star.css'
import starGrey from './star-grey.svg'
import starRed from './star-red.svg'


export default function Star({rating}) {
    const fullStars =  Array.from({length: parseInt(rating)}).map((e, idx) => idx)
    const emptyStars =  Array.from({length: 5 - parseInt(rating)}).map((e, idx) => idx)

    return <div className='star'>
        {fullStars.map(e => <img src={starRed} key={`full-${e}`} alt={''}/>)}
        {emptyStars.map(e => <img src={starGrey} key={`empty-${e}`} alt={''}/>)}
    </div>
}
