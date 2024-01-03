import Tada from "react-reveal/Tada";
import PropTypes from "prop-types";
const ArticleContent = ({ content, description }) => {
  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg lg:text-xl">Content</h2>
      <Tada>
        <p className="text-sm lg:text-base">{content}</p>
      </Tada>
      <div className="mt-5">
        <h2 className="font-bold text-lg lg:text-xl">Description</h2>
        <Tada>
          <p className="text-sm lg:text-base">{description}</p>
        </Tada>
      </div>
    </div>
  );
};
ArticleContent.propTypes = {
  content: PropTypes.string,
  description: PropTypes.string,
};
export default ArticleContent;
