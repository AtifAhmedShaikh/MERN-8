import PropTypes from "prop-types";
import Button from "../../components/UI/Button";
import { acceptRequestByAdmin, rejectRequestByAdmin } from "../../api/channels";
import { toast } from "react-toastify";
import { useState } from "react";
const RequestCard = ({
  email,
  username,
  name,
  profileImage,
  channelApprovalStatus,
  _id,
}) => {
  const [isAccepting, setIsAccepting] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const handleAccept = async () => {
    setIsAccepting(true);
    const response = await acceptRequestByAdmin(_id);
    if (!response) return;
    toast.success(response?.data?.message);
    setIsAccepting(false);
  };
  const handleReject = async () => {
    setIsRejecting(true);
    const response = await rejectRequestByAdmin(_id);
    if (!response) return;
    toast.success(response?.data?.message);
    setIsRejecting(false);
  };
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
          <Button
            variant={"danger"}
            className="px-2 py-1 "
            isLoading={isRejecting}
            onClick={handleReject}
          >
            Decline
          </Button>
          <Button
            variant={"success"}
            className="px-2 py-1"
            isLoading={isAccepting}
            onClick={handleAccept}
          >
            Accept
          </Button>
        </span>
      ) : channelApprovalStatus === "ACCEPTED" ? (
        <span className="bg-red-600 rounded-lg text-[12px] px-2 text-gray-100">
          rejected
        </span>
      ) : (
        <span className="bg-green-600 rounded-lg text-[12px] px-2 text-gray-100">
          accepted
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
