const Input = ({ value, onChange, type, placeholder, min }) => {
  return (
    <input
      type={type}
      className="input input-bordered input-primary w-full max-w-xs"
      placeholder={placeholder}
      value={value}
      min={min}
      onChange={onChange}
      required
    />
  );
};

export default Input;
