import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import { useDispatch } from "react-redux";
import { updateArticles } from "../store/slices/article.slice.js";
import { fetchChannelsList } from "../api/channels";
import { updateChannelsList } from "../store/slices/channel.slice.js";
import useAutoLogin from "./useAutoLogin";
const useSetup = () => {
  useAutoLogin();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await fetchArticles();
      const { data: data2 } = await fetchChannelsList();
      if (!data) return;
      dispatch(updateArticles({ data: data.articles, loading: false }));
      dispatch(updateChannelsList({ data: data2.channels, loading: false }));
      setLoading(false);
      setError(false);
    })();
  }, [dispatch]);
  return [loading, error];
};

export default useSetup;
