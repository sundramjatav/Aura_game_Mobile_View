import React from "react";

const Input = ({
  onChange,
  name,
  value,
  widthSize,
  type,
  placeholder,
  labelName,
  required,
}) => {
  return (
    <div
      className={`${widthSize} h-[5vh] border overflow-hidden rounded border-zinc-400`}
    >
      {labelName && <h1 className="font-medium cursor-pointer mb-[2px]">{labelName}</h1>}
      <input
        type={type || "text"}
        placeholder={placeholder || "Search"}
        className="w-full h-full p-3 outline-none border-none"
        value={value}
        onChange={onChange}
        name={name}
        required={required || false}
      />
    </div>
  );
};

export default Input;
