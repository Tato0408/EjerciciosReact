export default function List({ items }) {
  return (
    <ul className="list-group mb-2">
      {items.map((item, i) => (
        <li key={i} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}