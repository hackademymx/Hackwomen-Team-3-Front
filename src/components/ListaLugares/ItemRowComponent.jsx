/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import React from 'react';
import Brightness1Icon from '@mui/icons-material/Brightness1'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'; 
import StarIcon from '@mui/icons-material/Star'; 
import './ListaLugares.css' 

export default function ItemRowComponent({place}) {
    
    const lugarSeguro = {
        /* name: "Cafe Starbucks",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industri. Lorem ipsum has been the industry’s standars dummy text ever since the 1500s", */

        createdBy: "Usuario",
        creationDate: "6 Marzo 2023",
        likes: 57,
        /* address: "Av. Velarde, Santa Cruz de la Sierra" */
    };

    return (
        <div className='item-row'>
            <div className="item-image-column" >
                <img src={place.image} alt={place.name} />
            </div>
            <div className="item-desc-column" >
                <h2 className='ml-10'>{place.name}</h2>
                <div>
                    <div className='item-creation-cnt'>
                        <p className='flex-auto item-creator-label m-0'>{lugarSeguro.createdBy}</p>
                        <p className='flex-auto border-left m-0'>{lugarSeguro.creationDate}</p>
                        <p className='flex-auto border-left m-0'>{lugarSeguro.likes} likes</p>
                    </div>
                    <div style={{ width: '60%'}}> </div>
                </div>
                <p className='ml-10'>Descripción: {place.description}</p>
                <div className='btn-location ml-10'>
                    <LocationOnIcon className='dp-inline-block location-icon'/>    
                    <p className='btn-location dp-inline-block'> {`${place.address_state}, ${place.address_city}`}</p>
                </div>
            </div>
            <div className="item-menu-column" >
                <div className='btn-option'>
                    <StarIcon/>
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
    )
}

ItemRowComponent.propTypes = {
    place:PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        address_state: PropTypes.string,
        address_city: PropTypes.string
    }).isRequired,
    // showModal: PropTypes.func.isRequired,
};
