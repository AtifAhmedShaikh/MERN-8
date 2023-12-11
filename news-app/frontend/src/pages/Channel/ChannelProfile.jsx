import React from "react";
import BackBar from "../../components/Navbar/BackBar";
import ArticleCard from "../../components/Cards/ArticleCard";
import BottomBar from "../../layouts/BottomBar";
import Container from "../../layouts/Container";
const ChannelProfile = () => {
  return (
    <React.Fragment>
      <BackBar pageLabel={"Profile"} />
      <Container className="flex items-center flex-col w-full justify-center mt-5">
        <div className="flex justify-center lg:w-[35%] flex-col">
          <img
            className="lg:w-[100%] lg:h-[22vh] rounded-md"
            src="https://images.unsplash.com/photo-1700308234428-c619d7408fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
          <div className="flex justify-between px-2 mt-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <img
                  className="w-[50px] h-[50px] rounded-[25px]"
                  src="https://images.unsplash.com/photo-1700308234428-c619d7408fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
                  alt=""
                />
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[13px] font-bold">5660</span>
                    <span className="text-[9px]">Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[13px] font-bold">5660</span>
                    <span className="text-[9px]">Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[13px] font-bold">5660</span>
                    <span className="text-[9px]">Followers</span>
                  </div>
                </div>
              </div>
              <span className="font-bold text-lg">Bol News</span>
              <p className="font-md text-[14px] max-w-[65%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                assumenda reiciendis.
              </p>
            </div>
          </div>
          <div className="mt-5 px-3">
            <h3 className="font-bold text-lg">About</h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, ut consequatur aspernatur ab consequuntur natus sint
              nihil possimus aut, laudantium tempore beatae cupiditate? Officia
              atque dolores, aspernatur libero officiis quas dolor corporis
              corrupti.
            </p>
          </div>
          <div className="mt-5 px-3">
            <h3 className="font-bold text-lg mb-5">News</h3>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default ChannelProfile;
