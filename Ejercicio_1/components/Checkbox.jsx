export default function Checkbox({ label }) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">{label}</label>
    </div>
  );
}