export default function Alert({ text, variant }) {
  return <div className={`alert alert-${variant}`}>{text}</div>;
}