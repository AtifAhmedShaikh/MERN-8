import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import BottomBar from "../../layouts/BottomBar";
import Card from "../../components/Cards/ChannelCard";
import BackBar from "../../components/Navbar/BackBar";
import Loader from "../../components/UI/Loader";
import { fetchChannelsList } from "../../api/channels.js";
const ChannelsList = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetchChannelsList();
      if (!response) return;
      setChannels(response.data.channels);
      console.log(response.data.channels);
      setLoading(false);
    })();
  }, []);
  return (
    <React.Fragment>
      <BackBar pageLabel={"Channels"} />
      {loading && <Loader />}
      <Container className="w-full flex flex-wrap px-0 py-2 gap-3 justify-start items-center">
        {channels.map((channel) => {
          return <Card key={channel._id} {...channel} />;
        })}
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default ChannelsList;
