import React from "react";
import {
  BsSearch,
  BsFillPersonFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import { RiNotificationFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="h-[50px] w-full bg-blue1 flex items-center sticky top-0 z-[999]">
      {/* left */}
      <div className="flex-3 ">
        {/* logo */}
        <span className="text-2xl ml-5 font-bold text-white cursor-pointer">
          Lamasocial
        </span>
      </div>
      {/* center */}
      <div className="flex-5 ">
        {/* search */}
        <div className="w-full h-7 bg-white rounded-[30px] flex items-center">
          <BsSearch fontSize={20} className="ml-[10px]" />
          <input
            type="text"
            className="rounded-none w-[70%] focus:outline-none"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex-4 flex items-center justify-around text-white">
        <div>
          <Link to={"/"}>
            <span className="ml-3 text-sm cursor-pointer">Homepage</span>
          </Link>
          <Link to={"/login"}>
            <span className="ml-3 text-sm cursor-pointer">Timeline</span>
          </Link>
        </div>
        {/* 通知栏 */}
        <div className="flex">
          <div className="mr-4 cursor-pointer relative">
            <BsFillPersonFill fontSize={20} />
            <span
              className="flex items-center justify-center text-xs w-4 h-4 
                            -top-2 -right-2 bg-red-500 rounded-[50%] text-white absolute"
            >
              1
            </span>
          </div>
          <div className="mr-4 cursor-pointer relative">
            <BsFillChatLeftTextFill fontSize={20} />
            <span
              className="flex items-center justify-center text-xs w-4 h-4 
                            -top-2 -right-2 bg-red-500 rounded-[50%] text-white absolute"
            >
              1
            </span>
          </div>
          <div className="mr-4 cursor-pointer relative">
            <RiNotificationFill fontSize={20} />
            <span
              className="flex items-center justify-center text-xs w-4 h-4 
                            -top-2 -right-2 bg-red-500 rounded-[50%] text-white absolute"
            >
              1
            </span>
          </div>
        </div>
        <Link to={"/profile"}>
          {/* assets放入public,然后使用根据public相对路径定src,这样才能打包后生效 */}
          <img
            src="./assets/person/1.jpeg"
            alt="profile"
            className="w-8 h-8 rounded-[50%] object-cover cursor-pointer mr-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
