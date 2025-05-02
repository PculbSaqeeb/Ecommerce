import React from "react";
import logo from "../assets/icons/Group 400.svg";
import lock_icon from "../assets/icons/Password.svg";
import Button from "../components/Button";
import NewPasswordSchema from "../constant/formErrorSchema/newPasswordSchema";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import {resetPassword} from '../services/authServices';

const New_Password = () => {
  const navigate = useNavigate();
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
      const email=localStorage.getItem('email');
      // const setNewPassword = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/user/change-password`,
      //   {
      //     email: email,
      //     password:data.password,
      //     confirmPassword:data.confirmPassword,
      //   } 
      // );
      console.log(data);
      const setNewPassword=await resetPassword(email,data);
      if (setNewPassword.data.status === 200) {
        navigate("/login");
      }
      toast.success(setNewPassword?.data?.message)
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90 " src={logo} alt="" />
        </div>
      </div>

      <p className="text-center mt-[26px] text-[24px] text-textTertiary font-semibold">
        New Password
      </p>
      <p className="text-center mt-[10px] text-textSecondary">
        Set new password for your account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-10">
        <div className="relative">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-[440px] px-3 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock_icon} alt="" />
          </div>
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
        )}

        <div className="relative">
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Password"
            className="w-[440px] px-3 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock_icon} alt="" />
          </div>
        </div>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.confirmPassword.message}
          </p>
        )}

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          variant="blueButton"
          size="xl"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default New_Password;
