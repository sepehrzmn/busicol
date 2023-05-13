const Button = ({ children, type = "solid", className = "", ...props }) => {
  const classNames = {
    solid: "bg-custom-gray text-white text-[14px] rounded-[4px]",
    outline: "border text-[14px] rounded-[4px]",
  };

  return (
    <button className={`${classNames[type]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
