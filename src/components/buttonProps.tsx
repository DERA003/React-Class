import React from "react";

interface ButtonProperties {
  label: string;
  onClick: () => void;
  color?: string;
}


const Button: React.FC<ButtonProperties> = ({
  label,
  onClick,
  color = "blue",
}) => {
  return <button style={{backgroundColor:color}} onClick={onClick}>{label}</button>;
};


export default Button;