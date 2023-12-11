import { useEffect, useState } from "react";
import { fetchChannelsList } from "../api/channels";

const useFetchChannels = () => {
  const [channelsList, setChannelsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await fetchChannelsList();
      console.log(data);
      if (!data) return;
      setChannelsList(data.channels);
      setLoading(false);
    })();
  }, []);
  return [channelsList, loading];
};

export default useFetchChannels;
