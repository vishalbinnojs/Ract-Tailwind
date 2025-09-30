import React from "react";
import Button from "./Button";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { BsReply } from "react-icons/bs";

const Card = ({ img, heading, text, like, comments, share }) => {
  return (
    <>
      <div className="w-full  bg-white rounded-2xl overflow-hidden shadow-md/8">
        {/* Top part */}
        <div className="w-full bg-blue-400 relative aspect-video">
          <img
            src={img}
            alt="failed loading profile"
            className="absolute left-1/2 -translate-x-1/2 translate-y-1/4  h-full aspect-square object-cover object-center  rounded-full  border-4 p-[0.2rem] bg-white border-blue-400"
          />
        </div>

        {/* Bottom part */}
        <div className="pt-16 pb-4 px-4 bottom flex flex-col gap-4">
          <div>
            <h2 className=" font-bold text-center text-2xl">{heading}</h2>
            <p className="text-center">{text}</p>
          </div>
          <div className=" flex justify-center gap-[8%]">
            <a
              className="w-[30px] h-[30px] flex justify-center items-center bg-blue-800 text-white rounded-full"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="w-[30px] h-[30px] flex justify-center items-center bg-[teal] text-white rounded-full"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="w-[30px] h-[30px] flex justify-center items-center bg-red-500 text-white rounded-full"
              href=""
            >
              
              <FaLinkedin />
            </a>
            <a
              className="w-[30px] h-[30px] flex justify-center items-center bg-red-600 text-white rounded-full"
              href=""
            >
              
              <FaYoutube />
            </a>
          </div>
          <div className=" flex justify-center gap-[8%]">
            <Button text="Subscribe" />
            <Button text="Message" />
          </div>
          <div className="  flex justify-center gap-[5%]">
            <span className="flex items-center gap-1">
              <CiHeart className="font-bold" size={20} />
              {like}
            </span>
            <span className="border-1 border-gray-400 "></span>
            <span className="flex items-center gap-1">
              <FaRegComment size={15} />
              {comments}
            </span>
            <span className="border-1 border-gray-400 "></span>
            <span className="flex items-center gap-1">
              <BsReply size={20} />
              {share}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
