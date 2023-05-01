import React from "react";
import { MdPermMedia, MdLabel, MdLocationOn } from "react-icons/md";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
const Share = () => {
  return (
    <div className="w-full h-[11rem] rounded-xl shadow-share">
      {/* share wrapper */}
      <div className="p-[0.6rem]">
        {/* share top */}
        <div className="flex items-center">
          {/* share profile img */}
          <img
            className="w-12 h-12 rounded-[50%] object-cover mx-[0.6rem]"
            src="./assets/person/1.jpeg"
            alt=""
          />
          <input
            className="border-none w-[80%] focus:outline-none "
            type="text"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="m-5" />
        {/* share bottom */}
        <div className="flex items-center justify-between">
          {/* share options */}
          <div className="flex ml-5">
            {/* share option */}
            <div className="flex items-center mr-4">
              <MdPermMedia
                // html-color="tomato"
                color="tomato"
                fontSize={"28px"}
                className="mr-2 cursor-pointer"
              />
              <span className="text-[0.9rem] font-medium">Photo or Video</span>
            </div>
            <div className="flex items-center mr-4">
              <MdLabel
                // html-color="tomato"
                color="blue"
                fontSize={"28px"}
                className="mr-2 cursor-pointer"
              />
              <span className="text-[0.9rem] font-medium">Tag</span>
            </div>
            <div className="flex items-center mr-4">
              <MdLocationOn
                // html-color="tomato"
                color="green"
                fontSize={"28px"}
                className="mr-2 cursor-pointer"
              />
              <span className="text-[0.9rem] font-medium">Location</span>
            </div>
            <div className="flex items-center mr-4">
              <BsFillEmojiSunglassesFill
                // html-color="tomato"
                color="goldenrod"
                fontSize={"28px"}
                className="mr-2 cursor-pointer"
              />
              <span className="text-[0.9rem] font-medium">Feelings</span>
            </div>
            <button
              className="ml-[8rem] mr-2 border-none p-2 rounded-md bg-green-600
                    font-medium cursor-pointer text-white"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
