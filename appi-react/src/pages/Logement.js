import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon";

export default function Logement() {

    const {id} = useParams()
    const [appartment, setAppartment] = useState(null)

    useEffect(() => {
        fetch('/logements.json')
            .then(res => res.json())
            .then(data => {
                const logement = data.find(d => d.id === id)
                setAppartment(logement)
            })
    }, [])

    if(!appartment){
        return null;
    }


    return (
        <nav>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star" color=' rgb(59, 91, 152)' ></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <div className='logement'>
        <div className='accordeons'>
            <h1>{appartment.title}</h1>
            <Accordeon />
            <Accordeon />
        </div>
        </div>
        </nav>
    )
}