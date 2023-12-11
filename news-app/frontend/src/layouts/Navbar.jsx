import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <React.Fragment>
      <div className="w-full bg-gray-800 h-12 shadow-md flex justify-between px-4 items-center">
        <div>
          <img
            className="h-[100%] w-[50px]"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </div>
        <div className="flex gap-3">
          {!authStatus ? (
            <div className="flex gap-1">
              <button
                className="bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700"
                onClick={() => navigate("/auth/signUp")}
              >
                Sign Up
              </button>
              <button
                className="bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700"
                onClick={() => navigate("/auth/login")}
              >
                Sign In
              </button>
            </div>
          ) : (
            <button className="bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700">
              Logout
            </button>
          )}
          <button className="bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700">
            Join as Channel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
