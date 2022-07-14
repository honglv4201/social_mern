import React from "react";
import "./post.css";
import { Users } from "../../dummyData";
const Post = ({ item }) => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__avatar">
          <img
            src={
              Users.filter((user) => user.id === item.userId)[0].profilePicture
            }
            alt=""
          />
        </div>
        <div className="post__name">
          {Users.filter((user) => user.id === item.userId)[0].username}
        </div>
      </div>
      <div className="post__center">
        <div className="post__desc">{item.desc}</div>
        <div className="post__img">
          <img src={item.photo} alt="" />
        </div>
      </div>
      <div className="post__bottom">
        <div className="post__interact">
          <i class="fa-solid fa-heart"></i>
          <div className="post__counter">23 people like it</div>
        </div>
        <div className="post__comment">12 comments</div>
      </div>
    </div>
  );
};

export default Post;
