import React from "react";

const defaultBackground = "bg-coral-red";
const defaultTextColor = "text-white";
const defaultBorderColor = "border-coral-red";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  BorderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor || defaultBackground} 
    ${textColor || defaultTextColor} 
    ${BorderColor || defaultBorderColor} 
    rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
