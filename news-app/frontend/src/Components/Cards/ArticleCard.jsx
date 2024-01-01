import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import { timeAgo } from "../../utils/timeStamp";
const ArticleCard = ({
  _id,
  title,
  urlToImage,
  createdAt,
  author: { username, profileImage },
}) => {
  const navigate = useNavigate();
  return (
    <div className="article md:w-[27rem] h-auto px-2 py-1 border-b pb-5 mb-5">
      <img
        className="h-[12rem] w-full md:w-[27rem] rounded-md"
        src={urlToImage}
        alt=""
      />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between px-3 mt-3">
        <div className="flex gap-2">
          <img
            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-[15px]"
            src={profileImage}
            alt=""
          />
          <span className="text-sm">{username}</span>
        </div>
        <span className="text-xs md:ml-auto">{timeAgo(createdAt)}</span>
      </div>
      <p className="font-bold text-md mb-3 line-clamp-3">{title}</p>
      <div className="flex justify-center">
        <Button
          type="button"
          className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => navigate(`/articles/${_id}`)}
        >
          Read Complete
        </Button>
      </div>
    </div>
  );
};
ArticleCard.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.object,
};
export default ArticleCard;
