import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Componente from "./components/Component";

function App() {
  return (
    <div className="App">
      <h1>Hola, mundo!</h1>
      <FontAwesomeIcon icon={faGlobe} />
      <Componente />
    </div>
  );
}

export default App;
