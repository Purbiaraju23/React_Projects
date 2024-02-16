import React from "react";

const FormItem = ({
  label,
  onChange,
  placeholder,
  value,
  Type,
  id,
  name,
  onBlur,
}) => {
  return (
    <div className="items">
      <label className="form-label">{label}:</label>
      <input
        onChange={onChange}
        type={Type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormItem;
