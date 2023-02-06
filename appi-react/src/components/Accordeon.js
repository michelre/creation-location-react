import React from 'react'
import{useState} from 'react'
import Thumb from "../components/Thumb";
import { Link } from 'react-router-dom'
import './Accordeon.css'


const [appartments, setAppartments] = useState([])

    useEffect(() => {
        fetch('/logements.json')
            .then(res => res.json())
            .then(data => {
                setAppartments(data)
            })
    }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {appartments.map(appartment => {
                return <Link
                    key={appartment.id}
                    to={`/logements/${appartment.id}`}
                >
                    
                    <Thumb
                        title={appartment.description}
                        image={appartment.equipments}
                    />
                </Link>
                
            })}
            
        </div>
    )
}
/*function Accordeon({title, content}) {
  const [active,setActive] =useState(false)

  const handleToggle = e =>{
    setActive(!active)
    useEffect(() => {
      fetch('/logements.json')
          .then(res => res.json())
          .then(data => {
              setAppartments(data)
          })
  }, [])
  }
  
  return (
    <nav className={`accordeon ${active&& "active"}`}>
      <div className="accordeon-title"oneClik={handleToggle}>
        {title}
     <i class="fa-solid fa-chevron-up"></i></div>

      <div className="accordeon-content">
        {content}
        <i class="fa-solid fa-chevron-up"></i></div>
        
    </nav>
   
  )
}*/
export default Accordeon




