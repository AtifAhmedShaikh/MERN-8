import React, { useEffect, useState } from "react";
import BackBar from "../../components/Navbar/BackBar";
import BottomBar from "../../layouts/BottomBar";
import Container from "../../layouts/Container";
import Button from "../../components/UI/Button";
import FormInput from "../../components/UI/FormInput";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticleById, updateArticleByChannel } from "../../api/articles";
const UpdateArticle = () => {
  const [updatedArticle, setUpdatedArticle] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetchArticleById(id);
      if (!response) return;
      console.log(response.data);
      setUpdatedArticle(response.data.article);
    })();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await updateArticleByChannel(updatedArticle);
    if (!response) return;
    setUpdatedArticle({});
    navigate("/articles");
  };

  const handleInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUpdatedArticle({ ...updatedArticle, [key]: value });
  };

  return (
    <React.Fragment>
      <BackBar />
      <Container className={"flex flex-col justify-center items-center"}>
        <h3>Update your Article for users of App </h3>
        <form onSubmit={submitHandler} className="flex flex-col min-w-[55%]">
          <FormInput
            type={"text"}
            label={"Title of Article"}
            placeholder={"Enter title..."}
            value={updatedArticle?.title}
            name={"title"}
            onChange={handleInputs}
          />
          <FormInput
            type={"text"}
            label={"Content of Article "}
            placeholder={"Enter content..."}
            value={updatedArticle?.content}
            name={"content"}
            onChange={handleInputs}
          />
          <FormInput
            type={"text"}
            label={"Description of Article "}
            placeholder={"Enter description..."}
            name={"description"}
            value={updatedArticle?.description}
            onChange={handleInputs}
          />
          <FormInput type={"file"} label={"Upload updated Image of article "} />

          <Button
            type="submit"
            className={"bg-green-500 rounded-md text-gray-100 w-fit"}
          >
            Update Article
          </Button>
        </form>
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default UpdateArticle;
