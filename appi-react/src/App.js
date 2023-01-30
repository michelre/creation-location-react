import {Routes ,Route} from "react-router-dom"
import logo from './logo.svg'
import Thumb from './components/Thumb'
import './App.css'
import Slider from './components/Slider'
import Accordeon from './components/Accordeon'
import Star from './components/Star'
import Tag from './components/Tag'
//import Page-error from './D-error/Page-error'
import Navbar from './Navbar/navbar'
import {useEffect, useState} from "react"

function App() {

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
            {appartments.map(appartment => <Thumb
                key={appartment.id}
                title={appartment.title}
                image={appartment.cover}
            />)}
            <Navbar/>
            <Routes>
                <Route path="/" element={<Accordeon/>} />
                <Route path="/Slider" element={<Slider/>} />
                <Route path="/star" element={<Star/>}  />
                <Route path="/Tag" element={<Tag/>} />
                <Route path="/thumb/:id" element={<Thumb/>} />
                
  
                
            </Routes>
           
        </div>
       /*<div className="app">
           
        </div>*/
    );
}

export default App;