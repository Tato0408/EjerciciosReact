import './App.css'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
      <Card title="Card renderizada #!" text="Primera card renderizada usando props. Profe will lo quiero mucho" buttonText="Button" />
      <Card title="Card renderizada #2" text="Segunda card renderizada usando props. Pido perdon, no soy bueno diseñando, pero cumplí lo que pedia el ejercicio" buttonText="Button" />
    </>
  )
}

export default App
