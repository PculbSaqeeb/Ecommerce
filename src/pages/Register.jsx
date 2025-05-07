import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import profile_icon from "../assets/icons/profile_icon.svg";
import lock_icon from "../assets/icons/password_icon.svg";
import email_icon from "../assets/icons/emial_icon.svg";
import Button from "../components/Button";
import { AiOutlinePhone } from "react-icons/ai";
import { PiAddressBook } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterSchema from "../constant/formErrorSchema/schema";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signupUser } from "../services/authServices";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userData = await signupUser(data);

      if (userData.status === 201) {
        navigate("/login");
      }
      toast.success(userData.data?.message);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col displayRegular">
      <AuthLayout>
        <p className="text-center mt-[26px] text-[18px] text-text font-bold">
          Welcome to E-Com!
        </p>
        <p className="text-center text-[18px] mt-[10px] text-textSecondary">
          Let's make your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-[28px]">
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-[440px] px-3 py-2 pl-12 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
              <img src={profile_icon} alt="" />
            </div>
          </div>

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
          )}

          <div className="relative mt-[18px]">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-[440px] px-3 py-2 pl-12 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={email_icon} alt="" />
            </div>
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}

          <div className="relative mt-[18px]">
            <input
              {...register("phoneNumber")}
              type="number"
              placeholder="Enter your phone number"
              className="w-[440px] px-3 py-2 pl-12 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
              required
            />
            <AiOutlinePhone
              size={21}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-inputText rotate-90"
            />
          </div>

          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-2">
              {errors.phoneNumber.message}
            </p>
          )}

          <div className="relative mt-[18px]">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-[440px] px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
              required
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
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}

          <div className="relative mt-[18px]">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-[440px] px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-md placeholder:text-inputText placeholder:text-[12px]"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={lock_icon} alt="" />
            </div>
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
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
          )}

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="blueButton"
            size="xl"
            type="submit"
          >
            Register using
          </Button>

          <div className="relative flex items-center justify-center mt-[27px]">
            <div className="border-t border-[#E1E2E7] w-[440px]"></div>
            <span className="bg-white px-2 text-sm text-textSecondary absolute font-bold">
              OR
            </span>
          </div>
          <div className="text-center text-sm pt-[30px]">Register</div>
        </form>
      </AuthLayout>
      <div className="text-center text-[12px] mt-[40px] text-textSecondary">
        Already have an account?
        <a href="/login" className="text-[#5C61F4] hover:underline ml-1">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Register;
