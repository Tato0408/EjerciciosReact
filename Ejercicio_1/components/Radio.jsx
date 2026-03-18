export default function Radio({ name, options }) {
  return (
    <>
      {options.map((opt, i) => (
        <div className="form-check" key={i}>
          <input className="form-check-input" type="radio" name={name} />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </>
  );
}