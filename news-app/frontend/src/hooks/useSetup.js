import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import { useDispatch, useSelector } from "react-redux";
import { updateArticles } from "../store/slices/article.slice.js";
import { fetchChannelsList } from "../api/channels";
import { updateChannelsList } from "../store/slices/channel.slice.js";
import useAutoLogin from "./useAutoLogin";

const useSetup = () => {
  const isLogin = useAutoLogin();  // Call it only once

  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!userAuth || isLogin) return;

      try {
        const data = await fetchArticles();
        const data2 = await fetchChannelsList();

        if (!data || !data2) {
          // Handle error or return early
          setError(true);
          setLoading(false);
          return;
        }

        dispatch(updateArticles({ data: data.articles, loading: false }));
        dispatch(updateChannelsList({ data: data2.channels, loading: false }));
        setLoading(false);
        setError(false);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();  // Call the fetchData function

  }, [dispatch, userAuth, isLogin]);

  return [loading, error];
};

export default useSetup;
