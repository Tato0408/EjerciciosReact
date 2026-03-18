import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function Form() {
  return (
    <form className="mb-3">
      <Input type="text" placeholder="Nombre" />
      <Input type="email" placeholder="Correo" />
      <Select options={["Usuario", "Admin"]} />
      <Checkbox label="Aceptar términos" />
      <Button text="Registrar" />
    </form>
  );
}