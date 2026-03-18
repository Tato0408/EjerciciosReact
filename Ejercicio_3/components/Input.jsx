export default function Input({ label, placeholder, type = "text", value, onChange }) {
  return (
    <div className="input-group-custom">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}