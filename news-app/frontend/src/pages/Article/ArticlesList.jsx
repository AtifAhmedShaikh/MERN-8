import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import BottomBar from "../../layouts/BottomBar";
import ArticleCard from "../../components/Cards/ArticleCard";
import BackBar from "../../components/Navbar/BackBar";
import Loader from "../../components/UI/Loader";
import { fetchArticles } from "../../api/articles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetchArticles();
      if (!response) return;
      setArticles(response.data.articles);
      setLoading(false);
    })();
  }, []);

  return (
    <React.Fragment>
      <BackBar pageLabel={"Articles"} />
      <Container className="flex flex-col justify-start items-center gap-5">
        {loading && <Loader />}
        {articles?.map((article) => {
          return <ArticleCard key={article._id} {...article} />;
        })}
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default Articles;
