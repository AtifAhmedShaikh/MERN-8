import PropTypes from "prop-types";
import { timeAgo } from "../../utils/timeStamp";
const CommentCard = ({
  commentText,
  createdAt,
  userId: { profileImage, name },
}) => {
  return (
    <div className="w-100 h-20 px-2 overflow-y-hidden border-b pb-3">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={profileImage}
            className="w-[30px] h-[30px] rounded-[50%]"
            alt="loading"
          />
          <span>{name}</span>
        </div>
        <span className="text-[11px]">{timeAgo(createdAt)}</span>
      </div>
      <p className="mt-1 text-[14px]">{commentText}</p>
    </div>
  );
};
CommentCard.propTypes = {
  commentText: PropTypes.string,
  createdAt: PropTypes.string,
  userId: PropTypes.object,
};
export default CommentCard;
