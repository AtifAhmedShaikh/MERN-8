// CommentsContainer.jsx
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCommentsById(id);
        setComments(response?.data?.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [id,currentCommentText]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await addCommentOnArticle(id, currentCommentText);
    setCurrentCommentText("");
    if (!response) return;
  };

  return (
    <Container className="w-[45%] bg-slate-100 rounded-lg ml-5 py-5 mb-[6rem] relative overflow-scroll overflow-x-hidden shadow-lg">
      <div className="flex justify-start mb-5">
        <h3 className="ml-4 text-xl font-bold">Comments on Article</h3>
      </div>
      <div className="flex flex-col w-full">
        {comments.map((comment) => (
          <CommentCard key={comment?._id} {...comment} />
        ))}
      </div>
      <form
        onSubmit={submitHandler}
        className="absolute bottom-0 w-full h-14 bg-gray-800 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder="Type your comment..."
          className="w-[80%] px-2 rounded-md h-[30px] text-[14px] focus:outline-none"
          onChange={(e) => setCurrentCommentText(e.target.value)}
          value={currentCommentText}
          required
        />
        <button type="submit" className="hover:scale-110">
          <IoMdSend color="white" className="text-xl" />
        </button>
      </form>
    </Container>
  );
};

export default CommentsContainer;
