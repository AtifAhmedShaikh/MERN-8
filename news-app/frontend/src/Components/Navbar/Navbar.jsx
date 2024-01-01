import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/auth";
import { toast } from "react-toastify";
import { logout } from "../../store/slices/auth.slice";
import Button from "../UI/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const handleLogout = async () => {
    const response = await logoutUser();
    if (!response) return;
    dispatch(logout());
    navigate("/");
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
              <Button
                className="w-fit "
                variant={"success"}
                isLoading={false}
                onClick={() => navigate("/auth/signUp")}
              >
                Sign Up
              </Button>
              <Button
                className="w-fit "
                variant={"success"}
                isLoading={false}
                onClick={() => navigate("/auth/login")}
              >
                Sign In
              </Button>
              <Button
                className="w-fit "
                variant={"success"}
                isLoading={false}
                onClick={() => navigate("/auth/channelRegister")}
              >
                Join As Channel
              </Button>
            </div>
          ) : (
            <Button
              className="w-fit "
              variant={"success"}
              isLoading={false}
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
