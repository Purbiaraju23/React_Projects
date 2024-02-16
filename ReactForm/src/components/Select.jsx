import React from "react";

function Select({ label, value, id, name, options }) {
  return (
    <div className="items">
      <label>{label}:</label>
      <select name={name} id={id}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {(value = options.value)}
      </select>
    </div>
  );
}

export default Select;
