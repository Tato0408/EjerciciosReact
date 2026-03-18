import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="card calculator-card">
        <h2 className="title">Calculadora</h2>

        <Input
          label="Número 1"
          type="number"
          placeholder="Ingrese el primer número"
        />

        <Input
          label="Número 2"
          type="number"
          placeholder="Ingrese el segundo número"
        />

        <Button text="Calcular" />

        <div className="result-box">
          Resultado: ---
        </div>
      </div>
    </div>
  );
}

export default App;