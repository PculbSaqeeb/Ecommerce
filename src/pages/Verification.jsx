import React from "react";
import logo from "../assets/icons/Group 400.svg";
import Button from "../components/Button";
import VerfiyOTPSchema from "../constant/formErrorSchema/VeirfySchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import {verifyOTP} from '../services/authServices';

const Verification = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(VerfiyOTPSchema),
  });

  const onSubmit = async (data) => {
    try {
      const email = localStorage.getItem("email");
      // const otpVerified = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/user/verify-otp`,
      //   {
      //     email: email,
      //     OTP: Number(data.otp.trim()),
      //   }
    // );
    const otpVerified= await verifyOTP(email,Number(data.otp));
      if (otpVerified.data.status === 202) {
        navigate("/new-password");
      }
      toast.success(otpVerified?.data?.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Incorrect OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90" src={logo} alt="" />
        </div>
      </div>

      <p className="text-center text-[24px] text-textTertiary font-semibold mt-[27px]">
        Enter Verification Code
      </p>

      <p className="text-center mt-[10px] text-textSecondary">
        <span className="text-red-500">*</span> We will send you a message to
        set or reset your new password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 mt-[26px]">
        <div className="">
          <input
            {...register("otp")}
            type="text"
            placeholder="Enter OTP here"
            className="w-[440px] px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {errors.otp && (
          <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
        )}

        <Button type="submit" variant="blueButton" size="xl">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default Verification;
