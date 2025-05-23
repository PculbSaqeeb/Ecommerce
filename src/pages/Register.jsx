import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import profile_icon from "../assets/icons/profile_icon.svg";
import lock_icon from "../assets/icons/password_icon.svg";
import email_icon from "../assets/icons/emial_icon.svg";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterSchema from "../constant/formErrorSchema/schema";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signupUser } from "../services/authServices";
import Input from "../components/Input";

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
    <div className="mt-[28px] flex items-center justify-center flex-col displayRegular">
      <AuthLayout>
        <p className="text-center lg:mt-[26px] xL:mt-[26px] text-[18px] text-text font-bold tracking-[0.5px]">
          Welcome to E-Com!
        </p>
        <p className="text-center text-[18px] mt-[10px] text-textSecondary">
          Let's make your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-[28px] w-full max-w-[440px]">
          {/* <div className="relative">
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
          )} */}

          <Input
            register={register}
            errors={errors}
            name="name"
            type="text"
            placeholder="Enter your name"
            icon={profile_icon}
          />

          {/* <div className="relative mt-[18px]">
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
          </div> */}

          <Input
            register={register}
            errors={errors}
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={email_icon}
          />

          {/* {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )} */}

          {/* <div className="relative mt-[18px]">
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
          )} */}

          <Input
            register={register}
            errors={errors}
            name="phoneNumber"
            type="number"
            placeholder="Enter your phone number"
            isPhone
          />

          {/* <div className="relative mt-[18px]">
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

          {/* <div className="relative mt-[18px]">
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
          )} */}

          <Input
            register={register}
            errors={errors}
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter your confirm password"
            isConfirmPassword
            icon={lock_icon}
            showConfirmPassword={showConfirmPassword}
            toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="blueButton"
            size="xl"
            type="submit"
            className="w-full text-[18px] mt-[29px]"
          >
            Register
          </Button>

          <div className="relative flex items-center justify-center mt-[27px]">
            <div className="border-t border-[#E1E2E7] w-[440px]"></div>
            <span className="bg-white px-2 text-sm text-textSecondary absolute font-bold">
              OR
            </span>
          </div>
          <div className="text-center text-[15px] pt-[30px]">Register using</div>
        </form>
      </AuthLayout>
      <div className="text-center text-[12px] lg:mt-[40px] xl:mt-[40px] mt-[20px] text-textSecondary">
        Already have an account?
        {/* <a href="/login" className="text-[#5C61F4] hover:underline ml-1">
          Log In
        </a> */}
        <Link
          to="/login"
          className="text-[#5C61F4] font-medium hover:underline ml-1"
        >
          log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
