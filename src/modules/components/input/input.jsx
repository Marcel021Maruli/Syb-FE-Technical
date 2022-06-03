import React, { memo } from "react";

const Input = ({ className, placeholder, name, type = "text", onChange }) => {
  return (
    <>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
