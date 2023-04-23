import { Routes,Route } from "react-router-dom";
import "./App.css";
import FormSecurePlace from "./components/FormSecurePlace/FormSecurePlace";
import ListaLugares from "./components/ListaLugares/ListaLugares";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormSecurePlace/>}/>
        <Route path="/listaLugares" element={<ListaLugares/>}/>
      </Routes>
    </div>
  );
}

export default App;
