import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Star from "../components/Star";
import Tags from "../components/Tags";
import Slider from "../components/Slider";
import './logement.css';
import Host from '../components/Host';
//import Footer from "./pages/Footer"



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
    }, [id])

    if (!appartment) {
        return null;
    }


    return (

        <nav className='block'>

            <div className={"logement-info"}>
                <Star
                    rating={appartment.rating}
                />
                <div className='host'>
                    <Host
                        host={appartment.host}
                    />
                </div>
            </div>
            <div className='logement'>
                <Tags
                    tags={appartment.tags}
                />
                <div className='accordeons'>
                    <h1>{appartment.title}</h1>
                    <Accordeon
                        title={'Description'}
                        content={appartment.description}
                    />
                    <Accordeon
                        title={'Equipements'}
                        content={appartment.equipments}
                    />
                    <div className='slider'>
                        <Slider
                        pictures={appartment.pictures}
                        />
                    </div>

                </div>
            </div>
        </nav>
    )
}
