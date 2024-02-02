import React from 'react';

const FormItem = ({ label, onChange, placeholder, value, Type, id, name }) => {
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
        required
      />
    </div>
  );
};

export default FormItem
