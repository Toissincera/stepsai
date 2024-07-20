import "../App.css";

export default function Dropdown({ label, value, options, onChange }) {
  return (
    <div>
      <div>{label}</div>
      <select
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
