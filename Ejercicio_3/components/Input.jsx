export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="input-group-custom">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}