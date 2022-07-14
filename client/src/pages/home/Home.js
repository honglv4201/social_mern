import React, { Fragment } from "react";
import Feed from "../../components/feed/Feed";
import MessageBar from "../../components/messageBar/MessageBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <MessageBar />
      </div>
    </Fragment>
  );
};

export default Home;
