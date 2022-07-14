import React from "react";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import Post from "../post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <Share />

      <div className="post-list">
        {Posts.map((item) => {
          return <Post key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
