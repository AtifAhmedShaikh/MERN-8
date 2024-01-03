import { useNavigate } from "react-router-dom";
import { followToChannel } from "../../api/channels";
import Button from "../UI/Button.jsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

import Flip from "react-reveal/Flip";
const ChannelCard = ({
  name,
  username,
  headline,
  profileImage,
  coverImage,
  _id,
}) => {
  const navigate = useNavigate();
  const [hasFollowed, setHasFollowed] = useState(false);
  const [inProgress, setIsProgress] = useState(false);

  const handleFollowButton = async (e) => {
    e.stopPropagation();
    setIsProgress(true);
    const response = await followToChannel(_id);
    console.log(response);
    if (!response) return;
    toast.success(response?.data?.message);
    setHasFollowed(true);
    setIsProgress(false);
  };
  return (
    <Flip bottom cascade>
      <div
        className="w-[25rem] bg-white rounded-md overflow-hidden shadow-lg py-3"
        onClick={() => navigate(`/channels/${_id}`)}
      >
        <div className="relative h-48">
          <img
            className="w-full h-full object-cover object-center"
            src={coverImage}
            alt={`${username}'s cover`}
          />
        </div>
        <div className="relative p-4">
          <div className="absolute top-0 left-0 mt-2 ml-2">
            <img
              className="w-12 h-12 rounded-full border-4 border-white"
              src={profileImage}
              alt={`${username}'s profile`}
            />
          </div>
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-2">{username}</h3>
            <p className="text-gray-600 mb-4">{name}</p>
            <p className="text-sm text-gray-700">{headline}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant={"primary"}
            className="w-fit px-2 py-2"
            isLoading={inProgress}
            onClick={handleFollowButton}
          >
            {hasFollowed ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </Flip>
  );
};
ChannelCard.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string,
  username: PropTypes.string,
  about: PropTypes.string,
  profileImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  followers: PropTypes.array,
  coverImage: PropTypes.string,
  _id: PropTypes.string,
};
export default ChannelCard;
