import React from "react";

function FormSelect({ label, value, id, name, options }) {
  return (
    <div className="items">
      <label>{label}:</label>
      <select name={name} id={id}>
        {options}
        {(value = options.value)}
      </select>
    </div>
  );
}

export default FormSelect;
