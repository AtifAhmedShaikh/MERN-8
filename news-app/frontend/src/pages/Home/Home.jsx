import React from "react";
import Navbar from "../../layouts/Navbar";
import BottomBar from "../../layouts/BottomBar";
import Carousel from "../../containers/HeroContainer";
import ChannelCard from "../../components/Cards/ChannelCard";
import ArticleCard from "../../components/Cards/ArticleCard";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import Container from "../../layouts/Container";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const articles = useSelector((state) => state.articles.data);
  const channelsList = useSelector((state) => state.channelsList.data);
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <BottomBar />
      <div className="my-[7vh] px-5">
        <h2 className="text-lg font-bold px-4 mb-5">Popular Channels</h2>
        <Container className="filters w-[100%] overflow-x-scroll overflow-y-hidden flex justify-center py-2 px-5 flex-wrap gap-5">
          {channelsList.map((channel) => {
            return <ChannelCard key={channel._id} {...channel} />;
          })}
        </Container>
        <div className="flex justify-center mt-5">
          <Button
            className="text-gray-100 bg-orange-600 hover:bg-orange-400 hover:text-gray-800"
            onClick={() => navigate("/channels/all")}
          >
            Explore more channels{" "}
          </Button>
        </div>
      </div>
      <Container className="mb-[7vh] px-5">
        <h2 className="text-lg  font-bold px-4  hover:text-blue-500 cursor-pointer">
          Latest Articles
        </h2>
        <div className="filters w-[100%] overflow-x-scroll overflow-y-hidden flex justify-center py-2 px-5 flex-wrap gap-5">
          {articles?.map((article) => {
            return <ArticleCard key={article._id} {...article} />;
          })}
        </div>
        <div className="flex justify-center mt-5">
          <Button
            className="text-gray-100 bg-orange-600 hover:bg-orange-400 hover:text-gray-800"
            onClick={() => navigate("/articles")}
          >
            Explore more articles
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
