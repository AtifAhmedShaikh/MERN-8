import React from "react";
import Container from "../../layouts/Container";
import BottomBar from "../../layouts/BottomBar";
import Card from "../../components/Cards/ChannelCard";
import BackBar from "../../components/Navbar/BackBar";
import Loader from "../../components/UI/Loader";
import useFetchChannels from "../../hooks/useFetchChannels";
const ChannelsList = () => {
  const [channelsList, loading] = useFetchChannels();
  return (
    <React.Fragment>
      <BackBar pageLabel={"Channels"} />
      <Container className="w-full flex flex-wrap px-0 py-2 gap-3 justify-center">
        {loading && <Loader />}
        {channelsList.map((channel) => {
          return <Card key={channel._id} {...channel} />;
        })}
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default ChannelsList;
