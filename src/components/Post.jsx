import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from "../dummyData";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full rounded-[0.6rem] shadow-share my-[1.9rem] mx-0">
      {/* post wrapper */}
      <div className="p-[0.6rem]">
        {/* post top */}
        <div className="flex items-center justify-between">
          {/* post top left */}
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-half object-cover"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            {/* post username */}
            <span className="text-sm font-medium my-0 mx-[0.63rem]">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            {/* post date */}
            <span className="text-xs">{post.date}</span>
          </div>
          {/* post top right */}
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>
        {/* post center */}
        <div className="my-5 mx-0">
          {/* post text */}
          <span>{post?.desc}</span>
          {/* post img */}
          <img
            className="mt-5 w-full max-h-[32rem] object-cover"
            src={post.photo}
            alt=""
          />
        </div>
        {/* post bottom */}
        <div className="flex items-center justify-between">
          {/* post bottom left */}
          <div className="flex items-center">
            <img
              className="w-6 h-6 mr-1 cursor-pointer"
              src="./assets/like.png"
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="w-6 h-6 mr-1 cursor-pointer"
              src="./assets/heart.png"
              alt="heart"
            />
            {/* post like counter */}
            <span className="text-base">{like} people like it</span>
          </div>
          {/* post bottom right */}
          <div className="">
            {/* post commont counter */}
            <span className="cursor-pointer">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
