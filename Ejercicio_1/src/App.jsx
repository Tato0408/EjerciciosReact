import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Radio from "../components/Radio.jsx";
import Alert from "../components/Alert.jsx";
import Card from "../components/Card.jsx";
import Form from "../components/Form.jsx";
import Badge from "../components/Badge.jsx";
import Progress from "../components/Progress.jsx";
import Table from "../components/Table.jsx";
import Modal from "../components/Modal.jsx";
import List from "../components/List.jsx";
import Footer from "../components/Footer.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <Alert text="Usuario creado" variant="success" />
      <Alert text="Error en datos" variant="danger" />

      <Card title="Usuario" content="Freddy Perez" />
      <Card title="Curso" content="React con Bootstrap" />

      <Badge text="Admin" variant="primary" />
      <Badge text="Activo" variant="success" />

      <Form />

      <Input type="password" placeholder="Contraseña" />

      <Select options={["El Salvador", "Guatemala"]} />

      <Checkbox label="Recibir correos" />

      <Radio name="estado" options={["Activo", "Inactivo"]} />

      <Button text="Guardar" variant="primary" />
      <Button text="Eliminar" variant="danger" />

      <Progress value={30} />
      <Progress value={80} />

      <Table />

      <List items={["React", "Bootstrap", "JSX"]} />

      <Modal />

      <Footer />
    </div>
  );
}