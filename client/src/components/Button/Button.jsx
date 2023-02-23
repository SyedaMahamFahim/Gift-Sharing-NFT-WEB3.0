import React from "react";

const Button = ({ text, isSubmit }) => {
  return (
    <>
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          backgroundColor: "rgb(45, 115, 255)",
          color: "white",
          borderRadius: "14px",
          fontWeight: "bold",
        }}
        type={isSubmit ? "submit" : "button"}
        
      >
        {text}
      </button>
    </>
  );
};

export default Button;
