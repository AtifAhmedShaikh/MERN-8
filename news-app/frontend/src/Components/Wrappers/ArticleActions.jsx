import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ShareButtons from "../../Components/Wrappers/ShareButtons.jsx";

import { useLocation } from 'react-router-dom';
const ArticleActions = ({ likeCount, isLiked, handleLike, handleDisLike }) => {
  let location = useLocation();
  console.log(location)
  return (
    <div className="my-5">
      <span>{likeCount}</span>
      {isLiked ? (
        <FaHeart onClick={handleDisLike} />
      ) : (
        <FaRegHeart onClick={handleLike} />
      )}
      <div className="ml-6">
        <ShareButtons shareUrl={ window.location.href} title={"check out article !"} source="ArticleHub.com" description="checkout amazing article of App" />
      </div>
    </div>
  );
};
ArticleActions.propTypes = {
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDisLike: PropTypes.func.isRequired,
};

export default ArticleActions;
