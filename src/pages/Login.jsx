import React from "react";
import profile from "../assets/icons/profile.svg";
import lock from "../assets/icons/Password.svg";
import google from "../assets/icons/google.svg";
import iphone from "../assets/icons/iphone.svg";
import facebook from "../assets/icons/facebook.svg";
import logo from "../assets/icons/Group 400.svg";
import AuthLayout from "../layout/AuthLayout";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema from "../constant/formErrorSchema/loginSchema";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginUser } from "../services/authServices";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // const userLoginData = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/user/login`,
      //   data
      // );
      const userLogin = await loginUser(data);
      if (userLogin.status === 203) {
        toast.error(userLogin.data?.message || "Invalid credentials");
        return; 
      }
    
      const token = JSON.stringify(userLogin?.data?.access_token);
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
        toast.success("Login Successfully!");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center displayRegular">
      <AuthLayout>
        <p className="text-text text-[18px] text-center mt-[26px] text-bold">
          Welcome back to E-com
        </p>
        <p className="text-center mt-[10px] text-[18px] text-textSecondary">
          Sign to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
          <div className="relative ">
            <input
              {...register("email")}
              type="email"
              placeholder="janedoe@gmail.com"
              className="w-[440px] px-3 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={profile} alt="" />
            </div>
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}

          <div className="relative mt-[25px]">
            <input
              {...register("password")}
              type="password"
              placeholder="••••••••••••••••"
              className={`w-[440px] px-3 py-2 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={lock} alt="" />
            </div>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}

          <div className="flex items-center justify-between mt-[14px]">
            <div className="space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#0c2b8e] focus:ring-[#0c2b8e] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-textTertiary hover:underline "
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="blueButton"
            size="xl"
          >
            Login
          </Button>

          <div className="relative flex items-center justify-center mt-[35px]">
            <div className="border-t border-gray-300 w-[440px]"></div>
            <span className="bg-white px-2 text-sm text-gray-500 absolute">
              OR
            </span>
          </div>

          <div className="text-center text-sm pt-[30px] text-[#323232]">
            Login using
          </div>
        </form>
      </AuthLayout>
      <div className="text-center text-sm mt-[40px] text-textSecondary">
        Don't have a account?
        <a
          href="/register"
          className="text-[#0c2b8e] font-medium hover:underline ml-1"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
