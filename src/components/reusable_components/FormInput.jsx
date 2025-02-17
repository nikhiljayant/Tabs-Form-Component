import React from "react";

const FormInput = ({
  type = "text",
  name = "",
  value = "",
  onChange = () => {},
  placeholder = "",
}) => {
  return (
    <div className="relative h-[50px] leading-[50px]">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-zinc-300 border"
      />
      <div
        className={`custom-placeholder ${
          value === "" ? "text-zinc-300" : "text-white"
        }`}
      >
        <span className="bg-white px-[5px]">{placeholder}</span>
      </div>
    </div>
  );
};

export default FormInput;
