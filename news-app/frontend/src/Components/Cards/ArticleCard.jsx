import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import { timeAgo } from "../../utils/timeStamp";
import Bounce from "react-reveal/Bounce";
const ArticleCard = ({
  _id,
  title,
  urlToImage,
  description,
  createdAt,
  author: { username, profileImage },
}) => {
  const navigate = useNavigate();
  return (
    <Bounce bottom>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={urlToImage} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
    {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

    </Bounce>
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
