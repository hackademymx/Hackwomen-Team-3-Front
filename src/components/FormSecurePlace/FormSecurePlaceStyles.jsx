import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";


export const DivFormSecurePlace=styled("div")({
    color: '#3b0764',
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    background: '#FFFFFF'
});

export const FormFormSecurePlace=styled("form")({
    background: '#D8B4FE',
    marginTop: "10vh",
    padding:"20px 0 30px 0",
    width:"900px",
    minHeight:"500px",
    boxShadow:"5px 8px 15px #aaa",
});

export const TextFieldFormSecurePlace=styled(TextField)({
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: "8px",
    width:"90%",
    marginBottom: "15px"
});

export const ButtonFormSecurePlace=styled(Button)({
    background: '#6E33F4',
    width: '300px',
    borderRadius: "15px",
    fontSize: "15px",
    marginTop: "40px",
})

