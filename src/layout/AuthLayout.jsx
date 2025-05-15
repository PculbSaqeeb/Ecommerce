import React from "react";
import google from '../assets/icons/google.svg';
import iphone from '../assets/icons/iphone.svg';
import facebook from '../assets/icons/facebook.svg';
import logo from '../assets/icons/Group 400.svg';
import { googleAuth } from '../services/authServices';
import { useNavigate } from "react-router";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    // <div>
    //   <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary mx-auto">
    //     <div className="flex h-full items-center justify-center">
    //       <img className="-rotate-90" src={logo} alt="App Logo" />
    //     </div>
    //   </div>

    //   {children}

    //   <div className="flex justify-center space-x-11 space-y-3 mt-6">
    //     <button type="button" className="px-2 pt-1 rounded-full">
    //       <img src={iphone} alt="Apple Login" />
    //     </button>

    //     <button type="button" className="p-2 rounded-full">
    //       <img src={facebook} alt="Facebook Login" />
    //     </button>

    //     <button
    //     onClick={() => {
    //       window.location.href = "https://6616-2401-4900-1f33-ff61-8f11-c63b-b465-b32f.ngrok-free.app/user/google";
    //     }}
    //       type="button"
    //       className="p-2 rounded-full"
    //     >
    //       <img src={google} alt="Google Login" />
    //     </button>
    //   </div>


    // </div>

    <div className="w-full flex flex-col items-center px-4 sm:px-0">
      {/* App Logo */}
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary flex items-center justify-center mx-auto mb-6">
        <img className="-rotate-90 w-[36px] h-[36px]" src={logo} alt="App Logo" />
      </div>

      {/* Main content (children like form) */}
      <div className="w-full max-w-[440px]">{children}</div>

      {/* Social Login Buttons */}
      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        <button type="button" className="p-2 rounded-full">
          <img src={iphone} alt="Apple Login" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button type="button" className="p-2 rounded-full">
          <img src={facebook} alt="Facebook Login" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          type="button"
          onClick={() => {
            window.location.href =
              "https://6616-2401-4900-1f33-ff61-8f11-c63b-b465-b32f.ngrok-free.app/user/google";
          }}
          className="p-2 rounded-full"
        >
          <img src={google} alt="Google Login" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </div>

  );
};

export default AuthLayout;
