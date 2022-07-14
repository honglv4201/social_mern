import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share__top">
        <div className="share__avatar">
          <img src="/assets/person/6.jpeg" alt="" />
        </div>
        <div className="share__input">
          <input type="text" placeholder="What is your mind?" />
        </div>
      </div>

      <hr className="share__hr" />
      <div className="share__bottom">
        <div className="share__list-options">
          <div className="share__option">
            <i class="fa-regular fa-images"></i>
            Photo or video
          </div>
          <div className="share__option">
            <i class="fa-regular fa-bookmark"></i>
            Tag someone
          </div>
        </div>

        <button className="share__button">Share</button>
      </div>
    </div>
  );
};

export default Share;
