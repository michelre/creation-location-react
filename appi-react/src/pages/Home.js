import React, {useEffect, useState} from 'react'
import Thumb from "../components/Thumb";
import { Link } from 'react-router-dom'

export default function Home() {

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
                        title={appartment.title}
                        image={appartment.cover}
                    />
                </Link>
                
            })}
            
        </div>      
    )
}