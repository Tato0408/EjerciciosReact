export default function Select({ options }) {
  return (
    <select className="form-select mb-2">
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  );
}