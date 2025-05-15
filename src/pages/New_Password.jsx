import React, { useState } from "react";
import logo from "../assets/icons/Group 400.svg";
import lock_icon from "../assets/icons/password_icon.svg";
import Button from "../components/Button";
import NewPasswordSchema from "../constant/formErrorSchema/newPasswordSchema";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { resetPassword } from "../services/authServices";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "../components/Input";

const New_Password = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(NewPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      const email = localStorage.getItem("email");
      const setNewPassword = await resetPassword(email, data);
      if (setNewPassword.data.status === 200) {
        navigate("/login");
      }
      toast.success(setNewPassword?.data?.message);
    } catch (error) {
      // toast.error(error.response?.data?.message);
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen displayRegular">
    //   <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
    //     <div className="flex h-full items-center justify-center">
    //       <img className="-rotate-90 " src={logo} alt="" />
    //     </div>
    //   </div>

    //   <p className="text-center mt-[26px] text-[18px] text-text font-bold">
    //     New Password
    //   </p>
    //   <p className="text-center text-[14px] mt-[10px] text-textSecondary">
    //     Set new password for your account
    //   </p>

    //   <form onSubmit={handleSubmit(onSubmit)} className="">
    //     <div className="relative mt-[42px]">
    //       <input
    //         {...register("password")}
    //         type={showPassword ? "text" : "password"}
    //         placeholder="Enter your Password"
    //         className="w-[440px] px-3 py-2 pl-12 pr-10  border border-inputBorder rounded-md placeholder:text-inputText placeholder:text-[12px]"

    //       />
    //       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    //         <img src={lock_icon} alt="" />
    //       </div>
    //       <div
    //         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
    //         onClick={togglePasswordVisibility}
    //       >
    //         {showPassword ? (
    //           <AiOutlineEyeInvisible size={20} />
    //         ) : (
    //           <AiOutlineEye size={20} />
    //         )}
    //       </div>
    //     </div>

    //     {errors.password && (
    //       <p className="text-red-500 text-sm mt-2">
    //         {errors.password.message}
    //       </p>
    //     )}

    //     <div className="relative mt-[8px]">
    //       <input
    //         {...register("confirmPassword")}
    //         type={showPassword ? "text" : "password"}
    //         placeholder="Enter your Confirm Password"
    //         className="w-[440px] px-3 py-2 pl-12 pr-10  border border-inputBorder rounded-md placeholder:text-inputText placeholder:text-[12px]"

    //       />
    //       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    //         <img src={lock_icon} alt="" />
    //       </div>
    //       <div
    //         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
    //         onClick={togglePasswordVisibility}
    //       >
    //         {showPassword ? (
    //           <AiOutlineEyeInvisible size={20} />
    //         ) : (
    //           <AiOutlineEye size={20} />
    //         )}
    //       </div>
    //     </div>

    //     {errors.confirmPassword && (
    //       <p className="text-red-500 text-sm mt-2">
    //         {errors.confirmPassword.message}
    //       </p>
    //     )}

    //     <Button
    //       type="submit"
    //       onClick={handleSubmit(onSubmit)}
    //       variant="blueButton"
    //       size="xl"
    //       className="text-[18px]"
    //     >
    //       Submit
    //     </Button>
    //   </form>
    // </div>

    <div className="flex flex-col items-center justify-center h-screen px-4 displayRegular">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90" src={logo} alt="" />
        </div>
      </div>

      <p className="text-center mt-[26px] text-[18px] text-text font-bold">
        New Password
      </p>
      <p className="text-center text-[14px] mt-[10px] text-textSecondary">
        Set new password for your account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[440px]">
        {/* <div className="relative mt-[29px]">
      <input
        {...register("password")}
        type={showPassword ? "text" : "password"}
        placeholder="Enter your Password"
        className="w-full px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-md placeholder:text-inputText placeholder:text-[12px]"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <img src={lock_icon} alt="" />
      </div>
      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
    </div>

    {errors.password && (
      <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
    )} */}

        <Input
          register={register}
          errors={errors}
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          isPassword
          icon={lock_icon}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />

        {/* <div className="relative mt-[8px]">
          <input
            {...register("confirmPassword")}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Confirm Password"
            className="w-full px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-md placeholder:text-inputText placeholder:text-[12px]"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock_icon} alt="" />
          </div>
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </div>
        </div>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.confirmPassword.message}
          </p>
        )} */}

         <Input
            register={register}
            errors={errors}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your confirm password"
            isPassword
            icon={lock_icon}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          variant="blueButton"
          size="xl"
          className="text-[18px] w-full mt-6 xl:mt-[29px] lg:mt-[29px]"
        >
          Submit
        </Button>
      </form>
    </div>


  );
};

export default New_Password;
