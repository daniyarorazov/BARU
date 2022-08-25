import React from "react";

const DropdownComponent = ({ value, options, onChange, className }) => {
  const styles = {
    border: "none",
    borderRadius: "7px",
    height: "100%",
    fontSize: "15px",
    padding: "0 5px",
    fontWeight: "bold",
    color: "#333",
    background: "#F3F3F3",
  };

  return (
    <>
      <select
        style={styles}
        value={value}
        onChange={onChange}
        className={className}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

export default DropdownComponent;
