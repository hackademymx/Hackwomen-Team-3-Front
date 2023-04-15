import React, {useState} from "react";
import {
    DivFormSecurePlace, 
    FormFormSecurePlace, 
    TextFieldFormSecurePlace,
    ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles"

export default function FormSecurePlace(){
    const [form,setForm]=useState({
        name:"",
        description:"",
        state:"",
        city:"",
        suburb:"",
        street:"",
        zipcode: "",
    }); 
    const [formError,setFormError]=useState({
        name: { error: false, message: "" },
        description: { error: false, message: "" },
        state: { error: false, message: "" },
        city: { error: false, message: "" },
        suburb: { error: false, message: "" },
        street: { error: false, message: "" },
        zipcode: { error: false, message: "" },
    });
    const [Loading, setLoading]=useState(false);

    const handleComprove=() => {
        const regExpNumber=/^\d{1,6}$/
        const { name, description, state, city, suburb, street, zipcode} = form;
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

        if (state === "") {
            internalForm.state.error=true;
            internalForm.state.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.state.error=false;
            internalForm.state.message="";
        }

        if (city === "") {
            internalForm.city.error=true;
            internalForm.city.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.city.error=false;
            internalForm.city.message="";
        }

        if (suburb === "") {
            internalForm.suburb.error=true;
            internalForm.suburb.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.suburb.error=false;
            internalForm.suburb.message="";
        }

        if (street === "") {
            internalForm.street.error=true;
            internalForm.street.message="Completa el campo";
            isCorrect = false;
        }else{
            internalForm.street.error=false;
            internalForm.street.message="";
        }

        if (zipcode === "") {
            internalForm.zipcode.error=true;
            internalForm.zipcode.message="Completa el campo";
            isCorrect = false;
        }else if(!regExpNumber.test(zipcode)){
            internalForm.zipcode.error=true;
            internalForm.zipcode.message="Usa unicamente dígitos";  
        }else{
            internalForm.zipcode.error=false;
            internalForm.zipcode.message="";
        }

        setFormError(internalForm);
        return isCorrect;
    };

    const handleSubmit= (e) => { // Cuando enviamos formulario
        e.preventDefault();
        setLoading(true);
        const allFine=handleComprove();
        if(allFine){
            console.log("Enviando datos...");
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
            <FormFormSecurePlace onSubmit={handleSubmit}> 
                <h1>Lugares Seguros</h1>
                <TextFieldFormSecurePlace 
                    error={formError.name.error}
                    helperText={formError.name.error&&formError.name.message}
                    id={
                        formError.name.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    } 
                    label="Nombre" 
                    name="name"
                    variant="outlined"
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
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.state.error}
                    helperText={formError.state.error&&formError.state.message}
                    id={
                        formError.state.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Estado" 
                    name="state"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.city.error}
                    helperText={formError.city.error&&formError.city.message}
                    id={
                        formError.city.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Ciudad" 
                    name="city"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.suburb.error}
                    helperText={formError.suburb.error&&formError.suburb.message}
                    id={
                        formError.suburb.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Colonia" 
                    name="suburb"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.street.error}
                    helperText={formError.street.error&&formError.street.message}
                    id={
                        formError.street.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Calle" 
                    name="street"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    error={formError.zipcode.error}
                    helperText={formError.zipcode.error&&formError.zipcode.message}
                    id={
                        formError.zipcode.error
                        ?"outlined-error-helper-text"
                        :"outlined-basic"
                    }
                    label="Código Postal" 
                    name="zipcode"
                    variant="outlined"
                    onChange={handleChange}
                />
                <ButtonFormSecurePlace 
                    type="submit" 
                    variant="outlined" 
                    color="secondary"
                    disabled={Loading}
                    >
                       {Loading?"DATOS ENVIADOS":"ENVIAR DATOS"}
                    </ButtonFormSecurePlace>
            </FormFormSecurePlace>
        </DivFormSecurePlace>
    );
}