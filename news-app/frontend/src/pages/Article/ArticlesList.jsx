import React, { useEffect, useState } from "react";
import Container from "../../containers/Container";
import BottomBar from "../../components/Navbar/BottomBar";
import ArticleCard from "../../components/Cards/ArticleCard";
import BackBar from "../../components/Navbar/BackBar";
import Loader from "../../components/UI/Loader";
import { fetchArticleByQuery, fetchArticles } from "../../api/articles";
import FiltersWrapper from "../../Components/Wrappers/FiltersWrapper";

const Articles = () => {
  const filters = ["pakistan","India","Good","Never","hello"]

  const [articles, setArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetchArticles();
      if (!response) return;
      setArticles(response.data.articles);
      console.log(response)
      setLoading(false);
    })();
  }, []);

const handleFilter = async (filter) => {
    setActiveFilter(filter);
    setLoading(true)
    const response = await fetchArticleByQuery(filter);
    console.log(response)
    setArticles(response.data.articles);
    setLoading(false)
  };

  return (
    <React.Fragment>
      <BackBar pageLabel={"Articles"} />
      <div className="filters w-[100%] overflow-x-scroll overflow-y-hidden flex justify-center py-2 px-10 ps-11">
      {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilter(filter)}
            className={`border ${
              activeFilter === filter
                ? "bg-gray-800 text-gray-100"
                : "border-gray-800 text-gray-800"
            } rounded-[4px] px-3 ml-4 py-1 hover:bg-gray-800 hover:text-gray-100`}
          >
            {filter}
          </button>
        ))}

    </div>
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
