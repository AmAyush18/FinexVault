import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Signin = () => {
  const signup = "/signup.png";

  const [formData, setFormData] = useState({
    email: ``,
    password: ``,
  });

  return (
    <div className="w-full">
      <div className="w-[90%] mt-8 mx-auto max-w-[1200px] py-8">
        <div
          className="w-[90%] mx-auto rounded-3xl flex flex-col gap-y-3 items-center py-10"
          style={{ backgroundImage: `url("${signup}")`, objectFit: "cover" }}
        >
          <h1 className="text-4xl font-[500] text-orange-400">Login</h1>
          <p className="text-sm mt-2 text-[#BFBFBF]">
            Welcome back! Please log in to access your account.
          </p>
          <form className="w-[80%] mx-auto flex flex-col gap-y-4">
            <div className="w-full flex flex-wrap md:px-6 mt-10 gap-x-3 gap-y-4">
              <input
                type="text"
                placeholder="Enter Email"
                className="w-[100%] md:w-[48%] py-4 px-4 text-sm bg-[#1A1A1A] rounded-full"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="text"
                placeholder="Enter Password"
                className="w-[120%] md:w-[48%] py-4 px-4 text-sm bg-[#1A1A1A] rounded-full"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <div className="w-full flex flex-col items-center gap-y-4">
              <Link className="w-[100%] my-2 md:w-[48%] text-center text-sm underline">
                Forgot Password?
              </Link>
              <button className="w-[100%] md:w-[48%] bg-emerald-500 text-sm py-4 text-center rounded-full">
                Login
              </button>
              <Link to={"/signup"} className="w-[100%] md:w-[48%] bg-[#333333] text-sm py-4 text-center rounded-full">
                Sign Up
              </Link>
              <div className="w-[100%] md:w-[48%] flex items-center">
                <div className="h-[1px] w-full bg-gray-200 bg-opacity-10" />
                <p className="text-sm px-2 flex"> Or </p>
                <div className="h-[1px] w-full bg-gray-200 bg-opacity-10" />
              </div>
              <div className="w-[100%] md:w-[48%] flex justify-center gap-x-4 py-2">
                <div className="px-2 py-2 rounded-full bg-orange-300 bg-opacity-5">
                    <div className="px-3 py-3 rounded-full bg-orange-200 bg-opacity-5">
                        <FaGoogle className="cursor-pointer text-[20px] text-orange-400" />
                    </div>
                </div>
                <div className="px-2 py-2 rounded-full bg-orange-300 bg-opacity-5">
                    <div className="px-3 py-3 rounded-full bg-orange-200 bg-opacity-5">
                        <FaGithub className="cursor-pointer text-[20px] text-orange-400" />
                    </div>
                </div>
                <div className="px-2 py-2 rounded-full bg-orange-300 bg-opacity-5">
                    <div className="px-3 py-3 rounded-full bg-orange-200 bg-opacity-5">
                        <FaLinkedin className=" cursor-pointer text-[20px] text-orange-400" />
                    </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
