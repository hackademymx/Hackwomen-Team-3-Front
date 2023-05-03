import { useEffect, useState } from 'react';
import { getPlaces } from '../../api/places';
import './ListaLugares.css' 
import Notification from '../Notification/Notification';
import ItemRowComponent from './ItemRowComponent';


export default function ListaLugares() {
    const [places, setPlaces]=useState([])
    const [notification, setNotification]=useState({
        open: false,
        message: "",
        severity: ""
    })

    // const [currentPlace, setCurrentPlace] = useState({}); 
    // const [openModal, setOpenModal] = useState(false); 

    // const showModal = (place) => {
      //  setCurrentPlace(place);
      //  setOpenModal(true);
    // }; 

    const callGetPlaces = async() => {
        const response = await getPlaces();
        console.log(response);

        if (response.status !== 200) {
            setNotification({
                open: true,
                message: "Error al consultar los datos",
                severity: "warning"
            });

            return;
        }

        setPlaces(response.data);
    }

    useEffect(()=>{
        callGetPlaces();
    }, []);

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
            
                {notification.open && (
                <Notification 
                    notification={notification} 
                    setNotification={setNotification}
                    />
                )}
                {places.map((place) => (
                    
                    <ItemRowComponent place={place} key={place.id} /> 
                ))}
        
                
        </div>
    );
}
