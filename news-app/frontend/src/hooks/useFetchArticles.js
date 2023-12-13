import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetchArticles();
      console.log(response);
      if (!response) return;
      setArticles(response.data.articles);
      setLoading(false);
    })();
  }, []);
  return [articles, loading];
};

export default useFetchArticles;
