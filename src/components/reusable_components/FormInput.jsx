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
        <span className={`${localStorage.getItem("theme") === "dark" ? "bg-[#0F172B]" : "bg-white"} px-[5px]`}>{placeholder}</span>
      </div>
    </div>
  );
};

export default FormInput;
