import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import BackBar from "../../components/Navbar/BackBar";
import Container from "../../containers/Container.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { timeAgo } from "../../utils/timeStamp.js";
import Button from "../../components/UI/Button.jsx";
import ShareButtons from "../../components/Wrappers/ShareButtons.jsx";
import BottomBar from "../../components/Navbar/BottomBar.jsx";
import Loader from "../../components/UI/Loader.jsx";
import CommentsContainer from "../../containers/CommentsContainer.jsx";
import {
  deleteArticleById,
  disLikeArticleById,
  fetchArticleById,
  likeArticleById,
  addToCollection,
} from "../../api/articles.js";


const CompleteArticle = () => {
  const user = useSelector((state) => state.auth.user);
  const [article, setArticle] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetchArticleById(id);
      if (!response) return;
      setArticle({
        ...response.data.article,
        isCurrentChannelArticle: response?.data?.article?.author._id === user._id,
      });
      setLikeCount(response.data.article.likes.length);
      setLiked(response.data.article.likes.includes(user._id));
      setLoading(false);
    })();
  }, [user, id, user._id]);

  const handleLike = async () => {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
    await likeArticleById(id);
  };

  const handleDisLike = async () => {
    setLiked(false);
    setLikeCount((prev) => prev - 1);
    await disLikeArticleById(id);
  };

  const handleSave = async () => {
    await addToCollection(id);
  };

  const handleDelete = async () => {
    const response = await deleteArticleById(id);
    if (!response) return;
    toast(response?.data?.message);
    console.log(response);
    navigate("/articles")
  };

  if (loading) return <Loader />;//If data is loading  display Loader

  const { title, description, content, urlToImage, createdAt } = article;
  return (
<React.Fragment>
  <BackBar pageLabel={"Article Details"} />
  <Container className="lg:max-w-[65%] p-3">
    <h2 className="text-2xl font-bold">{title}</h2>
    <img
      className="w-full h-[50vh] lg:h-[65vh] rounded-lg mt-4"
      src={urlToImage}
      alt=""
    />
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 mt-4">
      <div className="flex items-center mb-2 lg:mb-0">
        <img
          src={article?.author?.profileImage}
          alt="..."
          className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-[20px] lg:rounded-[25px] mx-3"
        />
        <span className="text-sm lg:text-base">{article?.author?.channelName}</span>
      </div>
      <span className="text-xs lg:text-sm">{timeAgo(createdAt)}</span>
    </div>
    <div className="mt-4">
      <h2 className="font-bold text-lg lg:text-xl">Content</h2>
      <p className="text-sm lg:text-base">{content}</p>
    </div>
    <div className="mt-5">
      <h2 className="font-bold text-lg lg:text-xl">Description</h2>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
    <div className="my-5">
      <span>Likes: {likeCount}</span>
      {isLiked ? (
        <FaHeart onClick={handleDisLike} />
      ) : (
        <FaRegHeart onClick={handleLike} />
      )}
    </div>
    <Button
      type="button"
      onClick={handleSave}
      className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Save for Later
    </Button>
    {article.isCurrentChannelArticle && (
      <div className="flex flex-col lg:flex-row gap-3 mt-3">
        <Button
          type="button"
          onClick={() => navigate(`/articles/update/${article._id}`)}
          variant="success"
          className="w-fit px-2 py-2"
          isLoading={false}
        >
          Update Article
        </Button>
        <Button
          type="button"
          onClick={handleDelete}
          variant="success"
          className="w-fit px-2 py-2"
          isLoading={false}
        >
          Delete Article
        </Button>
      </div>
    )}
    <div className="mt-5">
      <ShareButtons />
    </div>
  </Container>
  <CommentsContainer />
  <BottomBar />
</React.Fragment>

  );
};

export default CompleteArticle;
