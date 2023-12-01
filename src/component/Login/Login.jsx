import React from "react";
import login from "../../assets/images/misc/login.jpg";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border-2 border-gray-400 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-2/5 bg-blue-300  h-96 rounded-md p-4 shadow-inner shadow-gray-200 flex justify-between items-center">
        <div className="mr-4">
          <h2 className="text-4xl font-bold text-center  text-pink-400">
            Login
          </h2>
          <img
            src={login}
            className="w-40  h-40 mt-6 rounded-full border-2 border-green-200 mr-4"
            alt=""
          />
        </div>
        <div className="w-80 my-2 border-l-2 border-yellow-300 p-2 flex flex-col justify-center items-center">
          <form>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-xl font-semibold ">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  className="input input-bordered input-lg w-full max-w-xs h-8 rounded-sm pl-2"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered input-lg w-full max-w-xs h-8 rounded-sm pl-2"
                />
                <p className="text-xs font-semibold text-right pt-2">
                  Forgot Password
                </p>
              </div>
              <button className="text-xl font-semibold text-center bg-gray-500 hover:bg-blue-500 px-6 rounded-md text-white">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4">
            <p className="text-lg mt-2">Or login using</p>
            <div className="flex justify-around items-center">
              <CiFacebook className="hover:text-xl hover:text-blue-700" />
              <CiTwitter className="hover:text-xl hover:text-blue-700" />
              <SlSocialLinkedin className="hover:text-xl hover:text-blue-700" />
            </div>
          </div>
          <p className="text-sm my-4">
            Don't have an account? Please{" "}
            <Link
              to="/register"
              className="font-bold text-white-400 text-underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
