import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const sumar = (num1, num2) => {
    console.log("Sumar", num1, num2);
    setResultado(num1 + num2);
  }


  return (
    <div className="app-container">
      <div className="card calculator-card">
        <h2 className="title">Calculadora</h2>

        <Input
          label="Número 1"
          type="number"
          placeholder="Ingrese el primer número"
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
        />

        <Input
          label="Número 2"
          type="number"
          placeholder="Ingrese el segundo número"
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
        />
        <Button text="Calcular" onClick={() => sumar(numero1, numero2)} />
        <div className="result-box">
          Resultado: {resultado}
        </div>
      </div>
    </div>
  );
}

export default App;