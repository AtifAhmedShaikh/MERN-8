import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroContainer from "../../containers/HeroContainer";
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroContainer />
      <div className="my-[7vh] px-5">
        <h2 className="text-lg font-bold px-4 mb-5">
          Here is an Content of Landing, which contains App Information or
          others Things{" "}
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Home;
