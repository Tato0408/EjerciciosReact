export default function Badge({ text, variant }) {
  return <span className={`badge bg-${variant} me-2`}>{text}</span>;
}