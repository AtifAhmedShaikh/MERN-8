import React, { useEffect, useState } from "react";
import BackBar from "../../components/Navbar/BackBar";
import Container from "../../layouts/Container";
import { fetchArticleById } from "../../api/articles.js";
import { useParams } from "react-router-dom";

const CompleteArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetchArticleById(id);
      if (!response.data) return;
      console.log(response.data.article);
      setArticle(response.data.article);
    })();
  }, [id]);
  const { title, description, content, urlToImage, createdAt } = article;
  return (
    <React.Fragment>
      <BackBar pageLabel={"Article Details"} />
      <Container className="lg:max-w-[65%] p-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img
          className="w-full h-[65vh] rounded-lg mt-4"
          src={urlToImage}
          alt=""
        />
        <div className="flex justify-between px-5 mt-4">
          <div>
            <img
              src={article?.author?.profileImage}
              alt="..."
              className="w-[50px] h-[50px] rounded-[25px] mx-3"
            />
            <span>{article?.author?.channelName}</span>
          </div>
          <span>{createdAt}</span>
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-lg">Content</h2>
          <p>{content}</p>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-lg">Description</h2>
          <p>{description}</p>
        </div>
        <button
          type="button"
          className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Officail site
        </button>
      </Container>
    </React.Fragment>
  );
};

export default CompleteArticle;
