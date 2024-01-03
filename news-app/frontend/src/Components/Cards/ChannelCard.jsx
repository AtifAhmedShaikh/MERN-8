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
  backgroundImage,
  _id,
}) => {
  const navigate = useNavigate();
  const [hasFollowed, setHasFollowed] = useState(false);
  const [inProgress, setIsProgress] = useState(false);

  const handleFollowButton = async () => {
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
      <div className="lg:w-[23%] h-[18rem] rounded-md border relative flex justify-between flex-col pb-2 overflow-hidden hover:scale-95">
        <div
          className={`h-[45%] bg-cover bg-center w-100 flex items-end justify-center relative`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img
            className=" bottom-0 w-20 h-20 rounded-[50%] absolute "
            src={profileImage}
            alt=""
            style={{ marginBottom: "-40px" }}
            onClick={() => navigate(`/channels/${_id}`)}
          />
        </div>
        <div className="flex justify-center flex-col items-center px-2 mt-7">
          <p className="font-bold">{username}</p>
          <p className="font-light">{name}</p>
          <p className="font-semibold text-xs text-center">{headline}</p>
        </div>
        <div className="flex justify-center items-center">
          {!hasFollowed ? (
            <Button
              type="button"
              onClick={handleFollowButton}
              className="px-2 py-2"
              variant={"primary"}
              isLoading={inProgress}
            >
              Follow
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleFollowButton}
              className="px-2 py-2"
              variant={"primary"}
              isLoading={inProgress}
            >
              Following
            </Button>
          )}
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
  _id: PropTypes.string,
};
export default ChannelCard;
