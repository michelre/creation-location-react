import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './Slider.css'



export default function Slider(pictures) {

    
  return (
    <Carousel className='sliders'>
     
      <div>slider-1</div>
      <div>slider-1</div>
      <div>slider-1</div>
      <div>slider-1</div>
      
    </Carousel>
    
  /* <carousel>
       {pictures.map(slide=>(
        <div key={pictures.id}>
            {pictures}
            <img src ={slide.pictures} alt=""/>
            </div>
       ))}

    
    </carousel>*/
  )
}





