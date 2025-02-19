import React, {useEffect, useState} from 'react'
import Thumb from "../components/Thumb";
import { Link } from 'react-router-dom';
import'./home.css'
import Image from '../components/Image';



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
        <div className='contente'>
            <Image/>
        <div className='style'>
               
            {appartments.map(appartment => {
                return <Link
                    className={"appartment"}
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
        </div>



    )
}
