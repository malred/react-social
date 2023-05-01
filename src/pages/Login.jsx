import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f2f5] flex items-center justify-center">
      {/* login wrapper */}
      <div className="w-[70%] h-[70%] flex">
        {/* login left */}
        <div className="flex flex-[1] flex-col justify-center">
          {/* logo */}
          <h3 className="text-5xl font-extrabold text-[#1775ee] mb-[0.6rem]">
            Lamasocial
          </h3>
          {/* logo desc */}
          <span className="text-2xl">
            Connect with friends and world around you on Lamasocial
          </span>
        </div>
        {/* login right */}
        <div className="flex flex-[1] flex-col justify-center">
          {/* login box */}
          <div className="h-[19rem] p-5 bg-whtie rounded-[0.6rem] flex flex-col justify-between">
            <input
              className="h-[3.1rem] rounded-[0.6rem] border-solid border-1 
                        border-gray-300 text-lg pl-[1.2rem]"
              type="email"
              placeholder="Email"
            />
            <input
              className="h-[3.1rem] rounded-[0.6rem] border-solid border-1 
                        border-gray-300 text-lg pl-[1.2rem]"
              type="text"
              placeholder="Password"
            />
            <button
              className="focus:outline-none h-[3.1rem] rounded-[0.6rem]
                      bg-[#1775ee] text-white cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => {
                nav("/register");
              }}
              className="focus:outline-none h-[3.1rem] rounded-[0.6rem]
                      bg-[#42b72a] text-white cursor-pointer"
            >
              Create a New Account
            </button>
            {/* <Link to="/register">
              <span className="text-center text-[#1775ee]">
                Forgot Password?
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
