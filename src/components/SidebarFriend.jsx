import React from "react";

const SidebarFriend = ({ user }) => {
  return (
    <li className="flex items-center mb-4">
      <img
        className="w-8 h-8 rounded-[50%] object-cover mr-[0.6rem]"
        src={user.profilePicture}
        alt="profilePicture"
      />
      <span>{user.username}</span>
    </li>
  );
};

export default SidebarFriend;
