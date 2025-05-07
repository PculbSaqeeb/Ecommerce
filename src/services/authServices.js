import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}user/login`, {
    email:data.email,
    password:data.password,
  });
};

export const signupUser = (data) => {
  return axios.post(`${BASE_URL}user `, {
    name:data.name,
    email:data.email,
    password:data.password,
    phoneNumber: Number(data.phoneNumber),
  });
};

export const forgotPassword = (data) => {
  return axios.post(`${BASE_URL}user/forget-password`, data);
};

export const verifyOTP = (email, otp) => {
  console.log(typeof otp);
  return axios.post(`${BASE_URL}user/verify-otp`, {
    email: email,
    OTP: otp,
  });
};

export const resetPassword = (email,data) => {
    console.log(data);
  return axios.post(`${BASE_URL}user/change-password`, {
    email:email,
    password:data.password,
    confirmPassword:data.confirmPassword,
  });
};


export const googleAuth=()=>{
  return axios.get("https://6616-2401-4900-1f33-ff61-8f11-c63b-b465-b32f.ngrok-free.app/user/google");
}
