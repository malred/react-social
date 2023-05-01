import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Sidebar />
        {/* profile right */}
        <div className="flex-[9] ">
          {/* profile right top */}
          <div className="">
            {/* profile cover */}
            <div className="h-80 relative">
              {/* profile cover img */}
              <img
                className="w-full h-[15.5rem] object-cover"
                src="./assets/post/3.jpeg"
                alt=""
              />
              {/* profile user img */}
              <img
                className="w-[9.5rem] h-[9.5rem] rounded-half object-cover absolute
                          left-0 right-0 top-[9.5rem] m-auto border-[3px] border-solid 
                          border-white"
                src="./assets/person/7.jpeg"
                alt=""
              />
            </div>
            {/* profile info */}
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">Safak Kocaoglu</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>
          {/* profile right bottom */}
          <div className="flex">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
