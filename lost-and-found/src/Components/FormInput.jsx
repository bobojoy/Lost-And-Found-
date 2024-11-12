import React from 'react';

function FormInput({ label, type = "text", name, value, onChange, ...props }) {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded p-2"
        {...props}
      />
    </div>
  );
}

export default FormInput;