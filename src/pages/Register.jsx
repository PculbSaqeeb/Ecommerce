import React from "react";
import AuthLayout from "../layout/AuthLayout";
import profile_icon from "../assets/icons/profile.svg";
import lock_icon from "../assets/icons/Password.svg";
import email_icon from "../assets/icons/Message.svg";
import Button from "../components/Button";
import { AiOutlinePhone } from "react-icons/ai";
import { PiAddressBook } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterSchema from "../constant/formErrorSchema/schema";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import {signupUser} from '../services/authServices';
const Register = () => {
    const navigate = useNavigate();
  
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
      // const userData = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/user`,
      //   { ...data, phoneNumber: Number(data.phoneNumber) }
      // );
      const userData=await signupUser(data);
      
      if(userData.status===201){
        navigate('/login')
      }
      toast.success(userData.data?.message)
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col displayRegular">
      <AuthLayout>
        <p className="text-center mt-[26px] text-[18px] text-text font-bold">
          Welcome Back to E-com!
        </p>
        <p className="text-center text-[18px] mt-[10px] text-textSecondary">
          Let make your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-[28px]">
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your Name"
              className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 required"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
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
              placeholder="Enter your Email"
              className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
              {...register("password")}
              type="password"
              placeholder="Enter your Password"
              className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={lock_icon} alt="" />
            </div>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}

          <div className="relative mt-[18px]">
            <input
              {...register("phoneNumber")}
              type="number"
              placeholder="Enter your Phone number"
              className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
            <AiOutlinePhone
              size={21}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90"
            />
          </div>

          {errors.phoneNumber && (
            <p className="text-red-500 text-s mt-2">
              {errors.phoneNumber.message}
            </p>
          )}

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="blueButton"
            size="xl"
          >
            Register
          </Button>

          <div className="relative flex items-center justify-center mt-[27px]">
            <div className="border-t border-gray-300 w-[440px]"></div>
            <span className="bg-white px-2 text-sm text-gray-500 absolute">
              OR
            </span>
          </div>
          <div className="text-center text-sm pt-[30px]">Register</div>
        </form>
      </AuthLayout>
      <div className="text-center text-sm mt-[40px] text-textSecondary">
        Already have a account?
        <a
          href="/login"
          className="text-[#5C61F4] font-medium hover:underline ml-1"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default Register;
