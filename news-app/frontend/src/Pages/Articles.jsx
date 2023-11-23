import React from "react";
import Container from "../Containers/Container";
import BottomBar from "../Navbars/BottomBar";
import ArticleCard from "../components/cards/ArticleCard";
import FiltersBar from "../Navbars/FiltersBar";
import SearchBar from "../Navbars/SearchBar";
import BackBar from "../Navbars/BackBar";

const Articles = () => {
  return (
    <React.Fragment>
      <BackBar pageLabel={"Articles"}/>
      <Container className="flex flex-col justify-center items-center gap-5">
        <SearchBar/>
        <FiltersBar/>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default Articles;
