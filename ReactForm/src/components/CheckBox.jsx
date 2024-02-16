import React from "react";

function FormCheckBox({ label, checkItems }) {
  return (
    <div className="items">
      <label>{label}</label>
      <div className="checkbox-group">
        {checkItems.map((service) => (
          <span key={service}>
            <input type="checkbox" id={service} value={service} />
            <label htmlFor={service}>{service}</label>
          </span>
        ))}
      </div>
    </div>
  );
}

export default FormCheckBox;
