import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__logo">My Social</div>
      </div>

      <div className="topbar__center">
        <div className="topbar__search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for friends, post or video" />
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Homepage</span>
          <span className="topbar_link">TimeLine</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__icon">
            <i class="fa-solid fa-person"></i>
            <div className="topbar__icon-badge">1</div>
          </div>

          <div className="topbar__icon">
            <i class="fa-brands fa-rocketchat"></i>
            <div className="topbar__icon-badge">3</div>
          </div>

          <div className="topbar__icon">
            <i class="fa-regular fa-bell"></i>
            <div className="topbar__icon-badge">2</div>
          </div>
        </div>

        <div className="topbar__img-user">
          <img src="/assets/person/1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
