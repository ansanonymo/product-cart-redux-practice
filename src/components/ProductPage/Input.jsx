import React from "react";

export default function Input({
  label = "field name",
  id,
  type = "text",
  name,
  handleChange = () => {
    console.log("give, handleChange");
  },
  value,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id}>{label}</label>
      <input
        className="addProductInput"
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
    </div>
  );
}
