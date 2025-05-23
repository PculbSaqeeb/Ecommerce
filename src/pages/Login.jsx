import React, { useState } from "react";
import email_icon from '../assets/icons/emial_icon.svg'
import lock_icon from "../assets/icons/password_icon.svg";
import AuthLayout from "../layout/AuthLayout";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema from "../constant/formErrorSchema/loginSchema";
import { Link, Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginUser } from "../services/authServices";
import Input from "../components/Input";
import "../style/style.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userLogin = await loginUser(data);
      if (userLogin.status === 203) {
        toast.error(userLogin.data?.message || "Invalid credentials");
        return;
      }

      // const token = JSON.stringify(userLogin?.data?.access_token);
      const access_token = userLogin?.data?.access_token;
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        navigate("/");
        toast.success("Login Successfully!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    return <Navigate to="/" replace />;
  }

  return (
    //     <div className="h-screen flex flex-col items-center justify-center displayRegular">
    //       <AuthLayout>
    //         <p className="text-text text-[18px] text-center mt-[26px] font-bold">
    //           Welcome back to E-com
    //         </p>
    //         <p className="text-center mt-[10px] text-[18px] text-textSecondary">
    //           Sign to continue
    //         </p>

    //         <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
    //           <div className="relative ">
    //             <input
    //               {...register("email")}
    //               type="email"
    //               placeholder="Enter your Email"
    //               className="w-[440px] px-3 py-2 pl-12 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[14px]"
    //               required
    //             />
    //             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    //               <img src={profile_icon} alt="" />
    //             </div>
    //           </div>

    //           {errors.email && (
    //             <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
    //           )}

    //           <div className="relative mt-[10px]">
    //             <input
    //               {...register("password")}
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Enter your Password"
    //               className="w-[440px] px-3 py-2 pl-12 pr-10  border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
    //               required
    //             />
    //             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    //               <img src={lock_icon} alt="" />
    //             </div>
    //             <div
    //               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
    //               onClick={togglePasswordVisibility}
    //             >
    //               {showPassword ? (
    //                 <AiOutlineEyeInvisible size={20} />
    //               ) : (
    //                 <AiOutlineEye size={20} />
    //               )}
    //             </div>
    //           </div>

    //           {errors.password && (
    //             <p className="text-red-500 text-sm mt-2">
    //               {errors.password.message}
    //             </p>
    //           )}

    // <div className="w-full flex justify-end mt-2">
    //   <a
    //     href="/forgot-password"
    //     className="text-sm text-textTertiary hover:underline font-bold cursor-pointer"
    //   >
    //     Forgot Password?
    //   </a>
    // </div>



    //           <div className="flex items-center space-x-2">
    //             <input
    //               type="checkbox"
    //               id="remember"
    //               className="h-4 w-4 accent-[#BDC0CD]"
    //             />
    //             <label htmlFor="remember" className="text-sm text-textSecondary">
    //               Remember Me
    //             </label>
    //           </div>

    //           <Button
    //             type="submit"
    //             onClick={handleSubmit(onSubmit)}
    //             variant="blueButton"
    //             size="xl"
    //             className="text-[18px]"
    //           >
    //             Login
    //           </Button>

    //           <div className="relative flex items-center justify-center mt-[35px]">
    //             <div className="border-t border-[#E1E2E7] w-[440px]"></div>
    //             <span className="bg-white px-2 text-sm text-textSecondary absolute font-bold">
    //               OR
    //             </span>
    //           </div>

    //           <div className="text-center text-sm pt-[30px] text-[#323232]">
    //             Login using
    //           </div>
    //         </form>
    //       </AuthLayout>
    //       <div className="text-center text-[12px] mt-[40px] text-textSecondary">
    //         Don't have a account?
    //         <a
    //           href="/register"
    //           className="text-[#5C61F4] font-medium hover:underline ml-1"
    //         >
    //           Register
    //         </a>
    //       </div>
    //     </div>

    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-0 mt-[18px] displayRegular">
      <AuthLayout>
        <p className="text-text text-[18px] text-center mt-[17px] lg:mt-[26px] font-bold tracking-[0.5px]">
          Welcome back to E-com
        </p>
        <p className="text-center mt-[8px] text-[18px] text-textSecondary">
          Sign to continue
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-8 lg:mt-[52px]"
        >
          {/* Email Field */}
          {/* <div className="relative">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your Email"
              className="w-[440px] px-3 py-2 pl-12 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[14px]"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={profile_icon} alt="email icon" />
            </div>
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )} */}

          <Input
            register={register}
            errors={errors}
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={email_icon}
          />

          {/* Password Field */}
          {/* <div className="relative mt-[10px]">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-[440px] px-3 py-2 pl-12 pr-10 border border-inputBorder rounded-[5px] placeholder:text-inputText placeholder:text-[12px]"
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={lock_icon} alt="lock icon" />
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


          <div className="w-full flex justify-end mt-[8px]">
            <Link
              to="/forgot-password"
              className="text-sm text-textTertiary hover:underline font-bold cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-[15px] w-[15px] accent-[#BDC0CD]"
            />
            <label htmlFor="remember" className="text-sm text-textSecondary">
              Remember Me
            </label>
          </div>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="blueButton"
            size="xl"
            className="text-[18px] w-full mt-[29px]"
          >
            Login
          </Button>

          <div className="relative flex items-center justify-center mt-[36px] ">
            <div className="border-t border-[#E1E2E7] w-full"></div>
            <span className="bg-white px-2 text-sm text-textSecondary absolute font-bold">
              OR
            </span>
          </div>

          <div className="text-center text-[15px] pt-[30px] lg:mt-[42px] text-[#323232]">
            Login using
          </div>
        </form>
      </AuthLayout>

      <div className="text-center text-[12px] mt-[20px] lg:mt-[42px] xl:mt-[42px] text-textSecondary">
        Don't have an account?
        <Link
          to="/register"
          className="text-[#5C61F4] font-medium hover:underline ml-1"
        >
          Register
        </Link>
      </div>
    </div>

  );
};

export default Login;
