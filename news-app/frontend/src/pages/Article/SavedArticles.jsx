import React from "react";
import BackBar from "../../components/Navbar/BackBar";
import Container from "../../layouts/Container";
import SavedArticle from "../../components/Cards/SavedArticle";
import BottomBar from "../../layouts/BottomBar";
const SavedArticles = () => {
  return (
    <React.Fragment>
      <BackBar pageLabel={"saved articles"} />
      <Container className={"flex flex-col justify-start items-center"}>
        <div className="lg:w-[45%] mt-5">
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
        </div>
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default SavedArticles;
