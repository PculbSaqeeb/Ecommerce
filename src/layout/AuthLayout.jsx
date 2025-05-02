import React from "react";
import google from '../assets/icons/google.svg';
import iphone from '../assets/icons/iphone.svg';
import facebook from '../assets/icons/facebook.svg';
import logo from '../assets/icons/Group 400.svg';
import {googleAuth} from '../services/authServices';
import { useNavigate } from "react-router";

const AuthLayout = ({ children }) => {
  const navigate=useNavigate();
 
  return (
    <div>
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
        <div className="flex h-full items-center justify-center">
          <img className="-rotate-90" src={logo} alt="App Logo" />
        </div>
      </div>

      {children}

      <div className="flex justify-center space-x-11 space-y-3 mt-6">
        <button type="button" className="px-2 pt-1 rounded-full">
          <img src={iphone} alt="Apple Login" />
        </button>

        <button type="button" className="p-2 rounded-full">
          <img src={facebook} alt="Facebook Login" />
        </button>

        <button
        onClick={() => {
          window.location.href = "https://6616-2401-4900-1f33-ff61-8f11-c63b-b465-b32f.ngrok-free.app/user/google";
        }}
          type="button"
          className="p-2 rounded-full"
        >
          <img src={google} alt="Google Login" />
        </button>
      </div>

     
    </div>
  );
};

export default AuthLayout;
