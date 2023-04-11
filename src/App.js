import { Routes,Route } from "react-router-dom";
import "./App.css";
import FormSecurePlace from "./components/FormSecurePlace/FormSecurePlace";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormSecurePlace/>}/>
      </Routes>
    </div>
  );
}

export default App;
