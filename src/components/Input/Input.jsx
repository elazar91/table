import React from "react";

const Input = ({ type, placeholder, value, change, setElement }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => change(e, setElement)}
    />
  );
};

export default Input;
