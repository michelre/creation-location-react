import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Star from "../components/Star";
import Tags from "../components/Tags";

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
        <nav>
            <Star
                rating={appartment.rating}
            />
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
                </div>
            </div>
        </nav>
    )
}
