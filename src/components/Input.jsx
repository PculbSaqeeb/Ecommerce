// Input.jsx

import React from "react";
import { AiOutlinePhone, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
    register,
    errors,
    name,
    type,
    placeholder,
    icon,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    isPhone,
    isPassword,
    isConfirmPassword,
}) => {
    return (
        <div className=" mt-[8px]">
            <div className="relative">
                <input
                    {...register(name)}
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
                // required={required}
                />
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <img src={icon} alt={`${name} icon`} />
                    </div>
                )}
                {isPhone && (
                    <AiOutlinePhone
                        size={21}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-inputText rotate-90"
                    />
                )}
                {isPassword && (
                    <div
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </div>
                )}
                {isConfirmPassword && (
                    <div
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </div>
                )}
            </div>
            {errors[name] && (
                <p className="text-red-500 text-sm mt-2">{errors[name]?.message}</p>
            )}
        </div>
    );
};

export default Input;
