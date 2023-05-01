import React from "react";

const RightbarFriend = ({ user }) => {
  return (
    <li className="flex items-center mb-[0.93rem]">
      {/* rightbar profile img container */}
      <div className="mr-[0.63rem] relative">
        {/* rightbar profile img */}
        <img
          className="w-10 h-10 rounded-half object-cover"
          src={user.profilePicture}
          alt=""
        />
        {/* rightbar online */}
        <span
          className="w-3 h-3 rounded-half absolute bg-green-300 
                          -top-[0.12rem] right-0 border-2 border-solid border-white"
        ></span>
      </div>
      {/* rightbar username */}
      <span className="font-medium">{user.username}</span>
    </li>
  );
};

export default RightbarFriend;
