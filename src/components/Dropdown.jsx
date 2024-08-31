import "../App.css";

export default function Dropdown({ label, value, options, onChange }) {
  return (
    <div className="w-100 p-2">
      <select
        className="w-100 p-2 bg-light-subtle border border-2 border-success lead rounded"
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
