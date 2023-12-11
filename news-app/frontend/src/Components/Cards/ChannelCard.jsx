import { followToChannel } from "../../api/channels";
import Button from "../UI/Button.jsx";
import PropTypes from "prop-types";
const ChannelCard = ({
  channelName,
  headLine,
  followers,
  profileImage,
  backgroundImage,
  _id,
}) => {
  const handleFollowButton = async () => {
    const { data } = await followToChannel(_id);
    console.log(data);
  };
  return (
    <div className="lg:w-[23%] h-[18rem] rounded-md border relative flex justify-between flex-col pb-2 overflow-hidden hover:scale-95">
      <div
        className={`h-[45%] bg-cover bg-center bg-[url(${backgroundImage})] w-100 relative flex items-end justify-center`}
      >
        <img
          className=" bottom-0 w-20 h-20 rounded-[50%]"
          src={profileImage}
          alt=""
        />
      </div>
      <div className="flex justify-center flex-col items-center px-2">
        <p className="font-bold">{channelName}</p>
        <p className="font-semibold text-xs text-center">{headLine}</p>
        <div className="flex justify-around items-center w-[100%] mt-3">
          <div className="flex flex-col items-center">
            <span className="text-[13px] font-bold">{followers.length}</span>
            <span className="text-[9px]">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[13px] font-bold">5660</span>
            <span className="text-[9px]">Posts </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          type="button"
          className="bg-green-600 text-gray-100 hover:bg-green-400"
          onClick={handleFollowButton}
        >
          Follow
        </Button>
      </div>
    </div>
  );
};
ChannelCard.propTypes = {
  channelName: PropTypes.string,
  name: PropTypes.string,
  headLine: PropTypes.string,
  about: PropTypes.string,
  profileImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  followers: PropTypes.array,
  _id: PropTypes.string,
};
export default ChannelCard;
