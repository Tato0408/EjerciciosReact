export default function Button({ text, variant = "primary" }) {
  return <button className={`btn btn-${variant} me-2`}>{text}</button>;
}