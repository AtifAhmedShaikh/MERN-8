import React, { useState } from "react";
import BackBar from "../../components/Navbar/BackBar";
import BottomBar from "../../layouts/BottomBar";
import Container from "../../layouts/Container";
import Button from "../../components/UI/Button";
import FormInput from "../../components/UI/FormInput";
import { createArticleByChannel } from "../../api/articles";
import { toast } from "react-toastify";

const CreateArticle = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    description: "",
  });

  // handle submit to call api for create new article by current channel
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await createArticleByChannel(articleData);
    if (!response) return;
    toast.success(response?.data?.message);
    setArticleData({ title: "", description: "", content: "" });
  };

  // handle form Inputs to associate with state
  const handleInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setArticleData({ ...articleData, [key]: value });
  };

  return (
    <React.Fragment>
      <BackBar />
      <Container className={"flex flex-col justify-center items-center"}>
        <h3>Create an new Article for users of App </h3>
        <form onSubmit={submitHandler} className="flex flex-col min-w-[55%]">
          <FormInput
            type={"text"}
            label={"Title of Article"}
            placeholder={"Enter title..."}
            value={articleData.title}
            name={"title"}
            onChange={handleInputs}
          />
          <FormInput
            type={"text"}
            label={"Content of Article "}
            placeholder={"Enter content..."}
            value={articleData.content}
            name={"content"}
            onChange={handleInputs}
          />
          <FormInput
            type={"text"}
            label={"Description of Article "}
            placeholder={"Enter description..."}
            name={"description"}
            value={articleData.description}
            onChange={handleInputs}
          />
          <FormInput type={"file"} label={"Upload updated Image of article "} />
          <Button
            type="submit"
            className={"bg-green-500 rounded-md text-gray-100 w-fit"}
          >
            Publish Article
          </Button>
        </form>
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default CreateArticle;
