import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-main text-white w-[85%] lg:w-[50%] lg:max-w-md p-3 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
