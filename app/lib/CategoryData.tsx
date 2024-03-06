import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiBatteryHighBold } from "react-icons/pi";

export const CategoryData = [
  {
    id: 1,
    component: (size: string | number | undefined) => (
      <FaCameraRetro size={size} />
    ),
  },
  {
    id: 2,
    component: (size: string | number | undefined) => (
      <MdOutlineCamera size={size} />
    ),
  },
  {
    id: 3,
    component: (size: string | number | undefined) => (
      <MdCameraRoll size={size} />
    ),
  },
  {
    id: 4,
    component: (size: string | number | undefined) => (
      <BiSolidCameraMovie size={size} />
    ),
  },
  {
    id: 5,
    component: (size: string | number | undefined) => (
      <PiBatteryHighBold size={size} />
    ),
  },
];
