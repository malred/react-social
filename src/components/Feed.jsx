import React from "react";
import Share from "./Share";
import Post from "./Post";
import { Posts } from "../dummyData";
const Feed = () => {
  return (
    <div className="flex-[5.5] p-6">
      {/* feed wrapper */}
      <div className="">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
