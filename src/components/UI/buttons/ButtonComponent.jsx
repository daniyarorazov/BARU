import React from "react";

const ButtonComponent = (props) => {
  const styles = {
    border: "none",
    borderRadius: "7px",
    padding: "16px 12px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <button style={styles} className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default ButtonComponent;
