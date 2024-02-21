import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiBatteryHighBold } from "react-icons/pi";

const CategaoryItems = () => {
  return (
    <div className=" flex justify-around container mx-auto mt-3 gap-x-5 w-3/4 rounded-md overflow-x-scroll border border-amber-300 no-scrollbar">
      <FaCameraRetro className="categoryMenu" />
      <MdOutlineCamera className="categoryMenu" />
      <MdCameraRoll className="categoryMenu" />
      <BiSolidCameraMovie className="categoryMenu" />
      <PiBatteryHighBold className="categoryMenu" />
    </div>
  );
};

export default CategaoryItems;
