import './Slider.css'
import {useState} from "react";
import arrowRight from './arrow-right.svg'
import arrowLeft from './arrow-left.svg'


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
    <ul style={{transform: `translateX(-${currentSlide * 100}%)`}} className={'slides'}>
      {pictures.map((picture, idx) => <li key={idx} className={'slide'}>
        <img src={picture} alt={''}/>
      </li>)}
    </ul>
    {
      (pictures.length > 1) ? <>
      {/*<ul className={'dots'}>{pictures.map((p, idx) => <li key={`dot-${idx}`}>
          <button onClick={() => setCurrentSlide(idx)}></button>
        </li>)}</ul>*/}
        <div className={'slide-index'}><span>{currentSlide + 1}</span>/<span>{pictures.length}</span></div>
        <button onClick={nextSlide} className={'btn-next'}><img src={arrowRight} alt={''} /></button>
        <button onClick={previousSlide} className={'btn-prev'}><img src={arrowLeft} alt={''}/></button>
      </> : ''
    }
  </div>
}



