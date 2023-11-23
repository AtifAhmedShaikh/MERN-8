const ArticleCard = () => {
  return (
    <div className="article lg:w-[27rem] h-auto px-2 py-1 border-b pb-5 mb-5">
      <img
        className="h-[12rem] w-[100%] rounded-md "
        src="https://images.unsplash.com/photo-1700308234428-c619d7408fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt=""
      />
      <div className="flex gap-2 items-center justify-between px-3  mt-3">
        <div className="flex gap-2 ">
          <img
            className="h-[30px] w-[30px] rounded-[15px] "
            src="https://images.unsplash.com/photo-1700308234428-c619d7408fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
          <span className="text-sm">Bol News</span>
        </div>
        <span className="text-xs">2day ago</span>
      </div>
      <p className="font-bold text-md mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut
        inventore soluta dicta voluptatibus id, nobis sequi at corporis esse
        consectetur culpa maxime
      </p>
      <div className="flex justify-center">
      <button type="button" className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read Complete</button>
      </div>
    </div>
  );
};

export default ArticleCard;
