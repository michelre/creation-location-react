import React, {useEffect, useState} from 'react'
import {useParams, Navigate} from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Star from "../components/Star";
import Tags from "../components/Tags";
import Slider from "../components/Slider";
import './logement.css';
import Host from '../components/Host';



export default function Logement() {

    const {id} = useParams()
    const [appartment, setAppartment] = useState(null)
    const [error, setError] = useState(false)


    useEffect(() => {
        fetch('/logements.json')
            .then(res => res.json())
            .then(data => {
                const logement = data.find(d => d.id === id)
                if(!logement){
                    setError(true)
                    return
                }
                setAppartment(logement)
            })
    }, [id])

    if(error){
        return <Navigate to={'/error'} replace={true}/>
    }

    if (!appartment) {
        return null;
    }



    return (

        <nav className='block'>
            <div className='slider'>
                <Slider
                    pictures={appartment.pictures}
                />
            </div>

            <div className={"logement-info"}>
                <div>
                    <h1>{appartment.title}</h1>
                    <h3>{appartment.location}</h3>
                </div>
                <div>
                    <Host
                        host={appartment.host}
                    />
                    <Star
                        rating={appartment.rating}
                    />
                </div>
            </div>
            <div>
                <Tags
                    tags={appartment.tags}
                />
                <div className='accordeons'>

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