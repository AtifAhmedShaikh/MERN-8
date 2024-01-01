import PropTypes from "prop-types";
import Button from "../../components/UI/Button";
const RequestCard = ({
  email,
  username,
  name,
  profileImage,
  channelApprovalStatus,
}) => {
  return (
    <div className="flex justify-between items-center px-2 border-b py-2">
      <div className="w-[10%] text-center">
        <img
          src={profileImage}
          alt=""
          className="w-[30px] h-[30px] rounded-[15px]"
        />
      </div>
      <span className="text-[13px]"> {name} </span>
      <span className="text-[13px]"> {username} </span>
      <span className="text-[13px] display-2"> {email} </span>
      {channelApprovalStatus === "PENDING" ? (
        <span className="min-w-[20%] flex gap-2">
          <Button variant={"danger"} className="px-2 py-1 ">
            Decline
          </Button>
          <Button variant={"success"} className="px-2 py-1">
            Accept
          </Button>
        </span>
      ) : (
        <span className="text-capitalize px-2 bg-green-400 rounded-[10px] text-gray-100">
          {channelApprovalStatus.toLowerCase()}
        </span>
      )}
    </div>
  );
};
RequestCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
  channelApprovalStatus: PropTypes.string,
  profileImage: PropTypes.string,
  _id: PropTypes.string,
};
export default RequestCard;
