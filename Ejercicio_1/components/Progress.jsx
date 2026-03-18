export default function Progress({ value }) {
  return (
    <div className="progress mb-2">
      <div className="progress-bar" style={{ width: `${value}%` }}>
        {value}%
      </div>
    </div>
  );
}