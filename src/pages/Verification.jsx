import React from "react";
import logo from "../assets/icons/Group 400.svg";
import Button from "../components/Button";
import VerfiyOTPSchema from "../constant/formErrorSchema/VeirfySchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { verifyOTP } from "../services/authServices";
import Input from "../components/Input";

const Verification = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(VerfiyOTPSchema),
  });

  const onSubmit = async (data) => {
    try {
      const email = localStorage.getItem("email");
      const otpVerified = await verifyOTP(email, Number(data.otp));
      if (otpVerified.data.status === 202) {
        navigate("/new-password");
      }
      toast.success(otpVerified?.data?.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Incorrect OTP");
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
    //     <div className="flex h-full items-center justify-center">
    //       <img className="-rotate-90" src={logo} alt="" />
    //     </div>
    //   </div>

    //   <p className="text-center text-[18px] text-textTertiary font-semibold mt-[27px]">
    //     Enter Verification Code
    //   </p>

    //   <p className="text-center mt-[10px] text-textSecondary text-[14px] w-[400px]">
    //     <span className="text-red-500">*</span> We will send you a message to
    //     set or reset your new password
    //   </p>

    //   <form onSubmit={handleSubmit(onSubmit)} className=" mt-[41px]">
    //     <div className="">
    //       <input
    //         {...register("otp")}
    //         type="number"
    //         placeholder="Enter OTP here"
    //         className="w-[440px] px-3 py-3 border  rounded-[5px] border-[#E1E2E7] placeholder:text-textSecondary placeholder:text-[14px]"
    //       />
    //     </div>

    //     {errors.otp && (
    //       <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
    //     )}

    //     <Button
    //       className="mt-[42px]"
    //       type="submit"
    //       variant="blueButton"
    //       size="xl"
    //     >
    //       Confirm
    //     </Button>
    //   </form>
    // </div>

    <div className="flex flex-col items-center justify-center h-screen px-4 displayRegular">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90" src={logo} alt="" />
        </div>
      </div>

      <p className="text-center text-[18px] text-textTertiary font-semibold mt-[27px] tracking-[0.5px]">
        Enter Verification Code
      </p>

      <p className="text-center mt-[10px] text-textSecondary text-[14px] w-full max-w-[400px]">
        <span className="text-red-500">*</span> We will send you a message to set or reset your new password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-[41px] w-full max-w-[440px]">
        {/* <div>
      <input
        {...register("otp")}
        type="number"
        placeholder="Enter OTP here"
        className="w-full px-3 py-3 border rounded-[5px] border-[#E1E2E7] placeholder:text-textSecondary placeholder:text-[14px]"
      />
    </div>

    {errors.otp && (
      <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
    )} */}

        <Input
          register={register}
          errors={errors}
          name="otp"
          type="number"
          placeholder="Enter OTP here"
          isOtp
          className="pl-[16px]"
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          className="mt-[42px] w-full text-[18px]"
          type="submit"
          variant="blueButton"
          size="xl"
        >
          Confirm
        </Button>
      </form>
    </div>

  );
};

export default Verification;
