import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <>
      <Topbar />
      {/* homecontainer */}
      <div className="flex w-full">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
