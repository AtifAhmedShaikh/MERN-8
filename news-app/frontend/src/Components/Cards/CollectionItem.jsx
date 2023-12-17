import { FaBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { timeAgo } from "../../utils/timeStamp";
import { removeToCollection } from "../../api/articles";
const CollectionItem = ({ articleId, userId }) => {
  const { title, urlToImage, createdAt } = articleId;
  const { username } = userId;
  const handleRemove = async () => {
    const res = await removeToCollection(articleId._id);
    console.log(res);
  };
  return (
    <div className="card flex w-[100%] relative gap-2 py-2 border-b">
      <img
        className="w-[20%] rounded-md"
        src={urlToImage}
        alt="article image"
      />
      <div>
        <p className="text-[17px] font-medium leading-tight ">{title}</p>
        <div>
          <span className="text-[13px]">{username}</span>
          <span className="ml-4 text-[13px]">{timeAgo(createdAt)}</span>
        </div>
      </div>
      <div>
        <button className="hover:scale-90" onClick={handleRemove}>
          <FaBookmark />
        </button>
      </div>
    </div>
  );
};
CollectionItem.propTypes = {
  articleId: PropTypes.object,
  userId: PropTypes.object,
};
export default CollectionItem;
