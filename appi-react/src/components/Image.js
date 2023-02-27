import React from 'react'
import'./image.css'

function Image() {
  return (
    
    <div className={'image-container'}><p className='titre'> Chez vous, partout et ailleurs</p>
    <img className='image' src={"/img.jpg"} alt=""/>
    
    
    </div>
    
  )
}

export default Image