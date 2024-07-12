import React from "react";

const Button = ({ name, className, onClick }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
