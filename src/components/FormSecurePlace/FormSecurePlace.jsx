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

    const [Loading, setLoading]=useState(false)

    const handleSubmit=(e)=>{ // Cuando enviamos formulario
        e.preventDefault();
        setLoading(true);
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
                    id="outlined-basic" 
                    label="Nombre" 
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
                    label="Descripción" 
                    name="description"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
                    label="Estado" 
                    name="state"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
                    label="Ciudad" 
                    name="city"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
                    label="Colonia" 
                    name="suburb"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
                    label="Calle" 
                    name="street"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextFieldFormSecurePlace 
                    id="outlined-basic" 
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