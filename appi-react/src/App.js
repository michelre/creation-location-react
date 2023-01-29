//import logo from './logo.svg';
import Thumb from './components/Thumb'
import './App.css';
//import Slider from './components/Slider'
//import Accordeon from './components/Accordeon'
//import Star from './components/Star'
//import Tag from './components/Tag'

import {useEffect, useState} from "react";

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
        </div>
    );
}

export default App;