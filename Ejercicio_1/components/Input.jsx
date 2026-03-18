export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      className="form-control mb-2"
      placeholder={placeholder}
    />
  );
}