import React from "react";
import {
  MdRssFeed,
  MdVideoLibrary,
  MdGroup,
  MdBusinessCenter,
} from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { FaRegQuestionCircle, FaGraduationCap } from "react-icons/fa";
import { BsFillChatLeftTextFill, BsBookmarksFill } from "react-icons/bs";
import SidebarFriend from "./SidebarFriend";
import { Users } from "../dummyData";
const Sidebar = () => {
  return (
    <div className="flex-3 h-[calc(100vh-50px)] overflow-scroll sticky top-[3.1rem]">
      {/* sidebarwrapper */}
      <div className="p-5 text-xl">
        {/* sidebar list */}
        <ul className="p-0 m-0 list-none">
          {/* sidebar list item */}
          <li className="flex items-center mb-5">
            {/* sidebar list item icon */}
            <MdRssFeed className="mr-4" />
            {/* sidebar list item text */}
            <span>Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <BsFillChatLeftTextFill className="mr-4" />
            <span>Chats</span>
          </li>
          <li className="flex items-center mb-5">
            <MdVideoLibrary className="mr-4" />
            <span>Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <MdGroup className="mr-4" />
            <span>Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <BsBookmarksFill className="mr-4" />
            <span>Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <FaRegQuestionCircle className="mr-4" />
            <span>Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <MdBusinessCenter className="mr-4" />
            <span>Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <BiCalendarEvent className="mr-4" />
            <span>Events</span>
          </li>
          <li className="flex items-center mb-5">
            <FaGraduationCap className="mr-4" />
            <span>Courses</span>
          </li>
        </ul>
        <button className="w-[9rem] p-3 rounded-md bg-gray-200 font-medium">
          Show More
        </button>
        <hr className="my-5 mx-0" />
        {/* sidebar friend list */}
        <ul className="m-0 p-0 list-none">
          {/* sidebar friend */}
          {Users.map((u) => (
            <SidebarFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
