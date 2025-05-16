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
  return axios.post(`${BASE_URL}user/verify-otp`, {
    email: email,
    OTP: otp,
  });
};

export const resetPassword = (email,data) => {
  return axios.post(`${BASE_URL}user/change-password`, {
    email:email,
    password:data.password,
    confirmPassword:data.confirmPassword,
  });
};


export const googleAuth=()=>{
  return axios.get("http://192.168.1.58:5000/user/google/callback");
}

fetch('http://localhost:3001/user/google/callback', {
  method: 'GET',
  credentials: 'include', // if needed
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
    console.log('User data:', data.userData);
  });