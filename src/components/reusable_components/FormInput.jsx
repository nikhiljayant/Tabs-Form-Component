import React from "react";

const FormInput = ({
  type = "text",
  name = "",
  value = "",
  onChange = () => {},
  placeholder = "",
}) => {
  return (
    <div className="input-parent">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-zinc-300 border"
      />
      <div className="custom-placeholder text-zinc-300">{placeholder}</div>
    </div>
  );
};

export default FormInput;
