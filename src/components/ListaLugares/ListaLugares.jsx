import { useEffect, useState } from 'react';
import { getPlaces } from '../../api/places';
import './ListaLugares.css' 
import ItemRowComponent from './ItemRowComponent';

export default function ListaLugares() {
    const [places, setPlaces]=useState([])
    const callGetPlaces=async() => {
        const response = await getPlaces();
        console.log(response);
        if(response.status!==201){
            console.log("Error al consultar los datos");
            return
        }

        setPlaces(response.data)
    }

    useEffect(()=>{
        callGetPlaces();
    }, [])

    return (
        <div className='list-container'>
            <div className="header-row">
                <div className="header-column" >
                    Lugares Seguros
                </div>
                <div className="header-column" >
                    Todos
                </div>
                <div className="header-column" >
                    Seguros
                </div>
                <div className="header-column" >
                    No Seguros
                </div>
            </div>
                {places.map((place) => (
                    <ItemRowComponent place={place} key={place.id} /> 
                ))}
                
        </div>
    )
}
