export default function Card({ title, content }) {
  return (
    <div className="card p-3 mb-2">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}