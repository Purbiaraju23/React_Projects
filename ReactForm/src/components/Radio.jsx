import React from "react";

function FormRadio({ mainLabel, radioItems }) {
  return (
    <div className="items">
      <label>{mainLabel}:</label>
      <div className="radio-group">
        {radioItems.map((role) => (
          <span key={role}>
            <input
              type="radio"
              id={role.toLowerCase()}
              name="your-role"
              value={role}
            />
            <label htmlFor={role.toLowerCase()}> {role}</label>
          </span>
        ))}
      </div>
    </div>
  );
}

export default FormRadio;
