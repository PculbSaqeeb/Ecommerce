import classNames from "classnames";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  size = "md", 
  type = "button",
  ...rest
}) => {
  const baseStyles = "rounded-[5px]";

  const sizeStyles = {
    sm: "h-[35px] text-sm px-[16px]",
    md: "h-[48px] text-[18px] px-[24px]",
    lg: "h-[56px] text-[20px] px-[32px]",
    xl: "max-w-[440px] py-3 px-3"
  };

  const variantStyles = {
    primary: "bg-linkPrimary text-white border border-[#004E49] dark:bg-[#006d65] dark:border-[#006d65]",
    outlineDark: "text-textPrimary border-2 border-[#222222] bg-transparent dark:text-white dark:border-gray-400",
    outlineGray: "text-textPrimary border border-borderDark hover:bg-gray-100 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700",
    whiteOutline: "text-white border-2 border-white dark:text-white dark:border-white",
    lightOutline: "text-[20px] text-textPrimary border-2 border-borderDark dark:text-white dark:border-white",
    textOnly: "text-linkPrimary bg-transparent border-none dark:text-[#00c2b1]",
    cartBlue: "border border-textTertiary dark:border-[#00c2b1]",
    blueButton:"bg-textTertiary text-white dark:bg-[#00c2b1]"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};


export default Button;