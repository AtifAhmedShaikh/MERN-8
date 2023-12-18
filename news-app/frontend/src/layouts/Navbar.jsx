import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import { toast } from "react-toastify";
import { logout } from "../store/slices/auth.slice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const handleLogout = async () => {
    const response = await logoutUser();
    if (!response) return;
    dispatch(logout());
    toast(response?.data?.message);
  };
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
            <button
              className="bg-teal-600 px-2 py-1 rounded-md text-gray-100 hover:bg-teal-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
