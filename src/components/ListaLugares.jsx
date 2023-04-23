import React from 'react'
import './ListaLugares.css'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import StarIcon from '@mui/icons-material/Star';

export default function ListaLugares() {

    

    const lugarSeguro = {
        name: "Cafe Starbuck",
        description: "Lorem Ipsum  is simply dummy text of the printing and typisetting industri. Lorem ipsum has been the industry’s standars dummy text ever since the 1500s",
        createdBy: "Rosario V",
        creationDate: "6 Marzo 2023",
        likes: 57,
        address: "Av. Velarde, Santa Cruz de la Sierra"
    }

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
            <div className="item-row">
                <div className="item-image-column" >
                    <h2>Image</h2>
                </div>
                    <div className="item-desc-column" >
                    <h2 className='ml-10'>{lugarSeguro.name}</h2>
                    <div>
                        <div className='item-creation-cnt'>
                            <p className='flex-auto item-creator-label m-0'>{lugarSeguro.createdBy}</p>
                            <p className='flex-auto border-left m-0'>{lugarSeguro.creationDate}</p>
                            <p className='flex-auto border-left m-0'>{lugarSeguro.likes} likes</p>
                        </div>
                        <div style={{ width: '60%'}}> </div>
                    </div>
                    <p className='ml-10'>Descripcion: {lugarSeguro.description}</p>
                    <div className='btn-location ml-10'>
                        <LocationOnIcon className='dp-inline-block location-icon'/>    
                        <p className='btn-location dp-inline-block'> {lugarSeguro.address}</p>
                    </div>
                    
                </div>
                <div className="item-menu-column" >
                    <div className='btn-option'>
                        <StarIcon />
                        <p className='text-option'>Me Gusta</p>
                    </div>
                    <div className='btn-option'>
                        <Brightness1Icon />
                        <p className='text-option'>Editar</p>
                    </div>
                    <div className='btn-option'>
                        <CancelTwoToneIcon className='cancel-icon'/>
                        <p className='text-option'>Eliminar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
