import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
const SavedArticle = () => {
  return (
    <div className="card flex w-[100%] relative gap-2 py-2 border-b">
      <img
        className="w-[20%] rounded-md"
        src="https://images.unsplash.com/photo-1697617279806-f151d25022ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
        alt="article image"
      />
      <div>
        <p className="text-[17px] font-medium leading-tight ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          pariatur voluptas.
        </p>
        <div>
          <span className="text-[13px]">Bol News</span>
          <span className="ml-4 text-[13px]">2 day ago</span>
        </div>
      </div>
      <div>
        <button className="hover:scale-90">
          <FaRegBookmark />
        </button>
        <button className="mt-3 hover:scale-90">
          <IoMdShare />
        </button>
      </div>
    </div>
  );
};

export default SavedArticle;
