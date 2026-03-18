export default function Button({ text, onClick, onChange }) {
  return (
    <button className="btn-calc-custom" onClick={onClick} onChange={onChange}>
      {text}
    </button>
  );
}