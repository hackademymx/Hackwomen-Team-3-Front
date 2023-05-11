import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { addPlace } from "../../api/places";
import Notification from "../Notification/Notification";
import {
    DivFormSecurePlace, 
    FormFormSecurePlace, 
    TextFieldFormSecurePlace,
    ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles"

export default function FormSecurePlace(){
    const navigate = useNavigate();
    
    const [form,setForm]=useState({
        name:"",
        description:"",
        address_country:"", 
        address_state:"",
        address_city:"",
        address_colonia:"",
        address_street:"",
        address_zipcode: "",
    }); 
    const [formError,setFormError]=useState({
        name: { error: false, message: "" },
        description: { error: false, message: "" },
        address_country: { error: false, message: "" },
        address_state: { error: false, message: "" },
        address_city: { error: false, message: "" },
        address_colonia: { error: false, message: "" },
        address_street: { error: false, message: "" },
        address_zipcode: { error: false, message: "" },
    });
    const [Loading, setLoading]=useState(false);
    const [notification, setNotification]=useState({
        open:false,
        message: "",
        severity: "",
    });

    const handleComprove=() => {
        const regExpNumber=/^\d{1,6}$/
        const { name, 
                description, // eslint-disable-next-line
                address_country, // eslint-disable-next-line
                address_state, // eslint-disable-next-line
                address_city, // eslint-disable-next-line
                address_colonia, // eslint-disable-next-line
                address_street, // eslint-disable-next-line
                address_zipcode // eslint-disable-next-line
            } = form;
        const internalForm={...formError};
        let isCorrect = true;

        if (name === "") {
            internalForm.name.error=true;
            internalForm.name.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.name.error=false;
            internalForm.name.message="";
        }

        if (description === "") {
            internalForm.description.error=true;
            internalForm.description.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.description.error=false;
            internalForm.description.message="";
        }

        // eslint-disable-next-line
        if (address_country === "") {
            internalForm.address_country.error=true;
            internalForm.address_country.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.address_country.error=false;
            internalForm.address_country.message="";
        }

        // eslint-disable-next-line
        if (address_state === "") {
            internalForm.address_state.error=true;
            internalForm.address_state.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.address_state.error=false;
            internalForm.address_state.message="";
        }
        // eslint-disable-next-line
        if (address_city === "") {
            internalForm.address_city.error=true;
            internalForm.address_city.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.address_city.error=false;
            internalForm.address_city.message="";
        }
        // eslint-disable-next-line
        if (address_colonia === "") {
            internalForm.address_colonia.error=true;
            internalForm.address_colonia.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.address_colonia.error=false;
            internalForm.address_colonia.message="";
        }
        // eslint-disable-next-line
        if (address_street === "") {
            internalForm.address_street.error=true;
            internalForm.address_street.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.address_street.error=false;
            internalForm.address_street.message="";
        }
        // eslint-disable-next-line
        if (address_zipcode === "") {
            internalForm.address_zipcode.error=true;
            internalForm.address_zipcode.message="Completa el campo";
            isCorrect = false;
        }else if(!regExpNumber.test(address_zipcode)){
            internalForm.address_zipcode.error=true;
            internalForm.address_zipcode.message="Usa unicamente dígitos";  
        }else{
            internalForm.address_zipcode.error=false;
            internalForm.address_zipcode.message="";
        }

        setFormError(internalForm);
        return isCorrect;
    };

    const handleSubmit = async(e) => { // Cuando enviamos formulario
        e.preventDefault();
        setLoading(true);
        const allFine=handleComprove();
        if(allFine){
            // console.log("Enviando datos...");
            const response = await addPlace(form)
            console.log(response);

            if(response.status!==201){
                setNotification({
                    open:true,
                    message: "Ocurrió un error",
                    severity: "error",
                });
                setLoading(false);
                return;
            }

            navigate("/listaLugares", { replace:true });
        }
        setLoading(false);
        // console.log(form);
    };

    const handleChange=(e)=>{ // Cuando cambiamos nuestros valores de inputs
        // console.log(e);
        const nameInput=e.target.name;
        const valueInput=e.target.value;
        
        const internalForm=form;

        internalForm[nameInput]=valueInput;
        setForm(internalForm);
    };

    return (
        <DivFormSecurePlace>
            {notification.open && (
            <Notification
                notification={notification} 
                setNotification={setNotification}
            />
        )}
            <FormFormSecurePlace onSubmit={handleSubmit}> 
                <h1>Lugares Seguros</h1>
                <TextFieldFormSecurePlace 
                    error={formError.name.error}
                    helperText={formError.name.error && formError.name.message}
                    id={
                        formError.name.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    } 
                    label="Nombre" 
                    name="name"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.description.error}
                    helperText={formError.description.error&&formError.description.message}
                    id={
                        formError.description.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Descripción" 
                    name="description"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    onChange={handleChange}
                />

                <TextFieldFormSecurePlace 
                    error={formError.address_country.error}
                    helperText={formError.address_country.error&&formError.address_country.message}
                    id={
                        formError.address_country.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="País" 
                    name="address_country"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />

                <TextFieldFormSecurePlace 
                    error={formError.address_state.error}
                    helperText={formError.address_state.error && formError.address_state.message}
                    id={
                        formError.address_state.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Estado" 
                    name="address_state"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.address_city.error}
                    helperText={formError.address_city.error && formError.address_city.message}
                    id={
                        formError.address_city.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Ciudad" 
                    name="address_city"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.address_colonia.error}
                    helperText={formError.address_colonia.error&&formError.address_colonia.message}
                    id={
                        formError.address_colonia.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Colonia" 
                    name="address_colonia"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.address_street.error}
                    helperText={formError.address_street.error&&formError.address_street.message}
                    id={
                        formError.address_street.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Calle" 
                    name="address_street"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.address_zipcode.error}
                    helperText={formError.address_zipcode.error&&formError.address_zipcode.message}
                    id={
                        formError.address_zipcode.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Código Postal" 
                    name="address_zipcode"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                />
                <ButtonFormSecurePlace 
                    type="submit" 
                    variant="contained" 
                    disabled={Loading}
                    >
                    {Loading?"DATOS ENVIADOS":"ENVIAR DATOS"}
                    </ButtonFormSecurePlace>
            </FormFormSecurePlace>
        </DivFormSecurePlace>
    );
}