import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentOnArticle, fetchCommentsById } from "../api/articles";
import Container from "../containers/Container";
import CommentCard from "../components/Cards/CommentCard";
const CommentsContainer = () => {
  const { id } = useParams();
  const [currentCommentText, setCurrentCommentText] = useState("");
  const [comments, setComments] = useState([]);
  //fetch and render all comments of article
  useEffect(() => {
    (async () => {
      const response = await fetchCommentsById(id);
      console.log(response.data);
      setComments(response?.data?.comments);
    })();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await addCommentOnArticle(id, currentCommentText);
    setCurrentCommentText("");
    if (!response) return;
    setComments([...comments, response?.data?.comment]);
  };

  return (
    <Container
      className={
        "w-[45%] bg-slate-100 rounded-lg ml-5 py-5 mb-[6rem] relative overflow-scroll overflow-x-hidden shadow-lg"
      }
    >
      <div className="flex justify-start mb-5 ">
        <h3 className="ml-4">Comments of Articles</h3>
      </div>
      <div className="flex flex-col w-100">
        {comments?.map((comment) => {
          return <CommentCard key={comment?._id} {...comment} />;
        })}
      </div>
      <form
        onSubmit={submitHandler}
        className="absolute bottom-0 w-full h-14 bg-gray-800 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder="type your comment..."
          className="w-[80%] px-2 rounded-md h-[30px] text-[14px]"
          onChange={(e) => setCurrentCommentText(e.target.value)}
          value={currentCommentText}
          min={10}
          required
        />
        <button type="submit">
          <IoMdSend color="white" className="hover:scale-125" />
        </button>
      </form>
    </Container>
  );
};

export default CommentsContainer;
