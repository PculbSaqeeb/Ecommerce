import React from "react";
import AuthLayout from "../layout/AuthLayout";
import profile_icon from "../assets/icons/profile.svg";
import logo from "../assets/icons/Group 400.svg";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPasswordSchema from "../constant/formErrorSchema/forgotPassword";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { forgotPassword } from "../services/authServices";

const Forgot_Password = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      // const forgetPasswordEmail = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/user/forget-password`,
      //   data
      // );

      const forgetPasswordEmail=await forgotPassword(data);
      localStorage.setItem("email", forgetPasswordEmail?.data?.Email_Send_To);

      if (forgetPasswordEmail.data.status === 200) {
        navigate("/verification");
      }
      toast.success(forgetPasswordEmail?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90 " src={logo} alt="" />
        </div>
      </div>

      <p className="text-center mt-[26px] text-[18px] text-textTertiary font-semibold">
        Welcome Back to E-com!
      </p>
      <p className="text-center mt-[10px] text-textSecondary ">
        <span className="text-red-500">*</span> We will send you a message to
        set or reset your new password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-[26px] space-y-4">
        <div className="relative">
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email / Phone Number"
            className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={profile_icon} alt="" />
          </div>
        </div>

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <Button type="submit" variant="blueButton" size="xl">
          Send Verification
        </Button>
      </form>
    </div>
  );
};

export default Forgot_Password;
