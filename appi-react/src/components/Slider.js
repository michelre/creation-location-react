import './Slider.css'
import {useState} from "react";



export default function Slider({pictures}) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if(currentSlide === pictures.length - 1){
      setCurrentSlide(0)
      return
    }
    setCurrentSlide(currentSlide + 1)
  }

  const previousSlide = () => {
    if(currentSlide === 0){
      setCurrentSlide(pictures.length - 1)
      return
    }
    setCurrentSlide(currentSlide - 1)
  }


  return <div className="slider-container">
    <ul style={{transform: `translateX(-${currentSlide * 500}px)`}}>
      {pictures.map((picture, idx) => <li key={idx}>
        <img src={picture}/>
      </li>)}
    </ul>
    <button onClick={nextSlide}>Suivant</button>
    <button onClick={previousSlide}>Précédent</button>
  </div>
}





