import React from "react";
import google from '../assets/icons/google.svg';
import iphone from '../assets/icons/iphone.svg';
import facebook from '../assets/icons/facebook.svg';
import logo from '../assets/icons/Group 400.svg';

const AuthLayout = ({ children }) => {


  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-0">
      <div className="w-[72px] h-[72px] rounded-[16px] bg-textTertiary flex items-center justify-center mx-auto mb-6">
        <img className="-rotate-90 w-[36px] h-[36px]" src={logo} alt="App Logo" />
      </div>
      <div className="w-full max-w-[440px]">{children}</div>

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
              "http://192.168.1.58:5000/user/google/callback";
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

