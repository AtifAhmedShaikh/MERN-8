import React from "react";
import Button from "../components/UI/Button";
import { IoMdHome, IoIosSettings, IoMdNotifications } from "react-icons/io";
import { FaRegBookmark, FaNewspaper, FaUsers } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  const navIcons = [
    { path: "/", element: <IoMdHome /> },
    { path: "/articles", element: <FaNewspaper /> },
    { path: "/notifications", element: <IoMdNotifications /> },
    { path: "/channels", element: <FaUsers /> },
    { path: "/saved", element: <FaRegBookmark /> },
    { path: "/settings", element: <IoIosSettings /> },
  ];
  return (
    <React.Fragment>
      <div className="fixed bottom-0 left-0 w-full h-9 flex justify-between items-center text-gray-100 text-lg px-5 bg-gray-800 z-20">
        {navIcons.map((icon) => {
          return (
            <Button
              onClick={() => navigate(icon.path)}
              className={"bg-transparent hover:scale-110 hover:text-green-500"}
              key={icon.path}
            >
              {icon.element}
            </Button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default BottomBar;
