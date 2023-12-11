import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await fetchArticles();
      console.log(data);
      if (!data) return;
      setArticles(data.articles);
      setLoading(false);
    })();
  }, []);
  return [articles, loading];
};

export default useFetchArticles;
