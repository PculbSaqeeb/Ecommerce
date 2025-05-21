import React from "react";
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
    primary: "bg-linkPrimary text-white border border-[#004E49]",
    outlineDark: "text-textPrimary border-2 border-[#222222] bg-transparent",
    outlineGray: "text-textPrimary border border-borderDark hover:bg-gray-100",
    whiteOutline: "text-white border-2 border-white",
    lightOutline: "text-[20px] text-textPrimary border-2 border-borderDark",
    textOnly: "text-linkPrimary bg-transparent border-none",
    cartBlue: "border border-textTertiary",
    blueButton:"bg-textTertiary text-white"
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


// const Button = ({
//   children,
//   onClick,
//   variant = "primary",
//   className = "",
//   size = "md",
//   type = "button",
//   borderRadius = "rounded-[5px]", 
// }) => {
//   const sizeStyles = {
//     sm: "h-[35px] text-sm px-[16px]",
//     md: "h-[48px] text-[18px] px-[24px]",
//     lg: "h-[56px] text-[20px] px-[32px]",
//     xl: "max-w-[440px] py-3 px-3"
//   };
  
//   const variantStyles = {
//     primary: "bg-linkPrimary text-white border border-[#004E49]",
//     outlineDark: "text-textPrimary border-2 border-[#222222] bg-transparent",
//     outlineGray: "text-textPrimary border border-borderDark hover:bg-gray-100",
//     whiteOutline: "text-white border-2 border-white",
//     lightOutline: "text-[20px] text-textPrimary border-2 border-borderDark",
//     textOnly: "text-linkPrimary bg-transparent border-none",
//     cartBlue: "border border-textTertiary",
//     blueButton: "bg-textTertiary text-white mt-[29px]"
//   };
  
//   return (
//     <button
//     type={type}
//     onClick={onClick}
//     className={(
//       borderRadius,
//       sizeStyles[size],
//       variantStyles[variant],
//         className
//       )}
//       {...rest}
//       >
//       {children}
//     </button>
//   );
// };


export default Button;