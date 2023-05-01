import React from "react";
import { Users } from "../dummyData";
import RightbarFriend from "./RightbarFriend";
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        {/* birthday container */}
        <div className="flex items-center">
          <img
            className="object-cover w-10 h-10"
            src="./assets/gift.png"
            alt=""
          />
          {/* birthday text */}
          <span className="font-light text-[0.94rem]">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        {/* rightbar Ad */}
        <img
          className="w-full rounded-[0.6rem] my-[1.9rem] mx-0"
          src="./assets/ad.png"
          alt="ad"
        />
        {/* rightbar title */}
        <h4 className="mb-5 font-bold text-lg">Online Friends</h4>
        {/* rightbar friend list */}
        <ul className="p-0 m-0 list-none">
          {/* rightbar friend */}
          {Users.map((u) => (
            <RightbarFriend key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        {/* rightbar title */}
        <h4 className="font-medium text-lg mb-[0.6rem]">User information</h4>
        {/* rightbar info */}
        <div className="mb-8">
          {/* rightbar info item */}
          <div className="bottom-[0.6rem]">
            {/* rightbar info key */}
            <span className="font-medium mr-4 text-[#555]">City:</span>
            {/* rightbar info value */}
            <span className="font-light">New York</span>
          </div>
          <div className="bottom-[0.6rem]">
            <span className="font-medium mr-4 text-[#555]">From:</span>
            <span className="font-light">Madrid</span>
          </div>
          <div className="bottom-[0.6rem]">
            <span className="font-medium mr-4 text-[#555]">Relationship:</span>
            <span className="font-light">Single</span>
          </div>
        </div>
        {/* rightbar title */}
        <h4 className="font-medium text-lg mb-[0.6rem]">User Friends</h4>
        {/* rightbar followings */}
        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex-col flex mb-[1.2rem] cursor-pointer text-center"
            >
              <img
                className="w-[6.5rem] h-[6.5rem] object-cover rounded-md"
                src="./assets/person/1.jpeg"
                alt=""
              />
              {/* rightbar followings name */}
              <span>John Carter</span>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="flex-[3.5]">
      {/* right bar wrapper */}
      <div className="pt-5 pr-5 pb-0 pl-0">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
