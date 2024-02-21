import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiBatteryHighBold } from "react-icons/pi";

const CategaoryItems = () => {
  return (
    <div className=" flex justify-around gap-x-5 w-full overflow-x-scroll m-5 border border-amber-300 no-scrollbar">
      <FaCameraRetro className="categoryMenu" />
      <MdOutlineCamera className="categoryMenu" />
      <MdCameraRoll className="categoryMenu" />
      <BiSolidCameraMovie className="categoryMenu" />
      <PiBatteryHighBold className="categoryMenu" />
    </div>
  );
};

export default CategaoryItems;
