import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiBatteryHighBold } from "react-icons/pi";

// productTitle String?
//   description  String?
//   place        String?
//   photo        String?
//   price        Int?
//   categoryName String?
export const CategoryData = [
  {
    id: 1,
    productTitle: "camera",
    description: "all verity of cameras are present",
    price: 2500,
    categoryName: "photo Rental",
    component: (size: string | number | undefined) => (
      <FaCameraRetro size={size} />
    ),
  },
  {
    id: 2,
    productTitle: "lense",
    description: "all verity of lense are present",
    price: 7500,
    categoryName: "photo Rental",
    component: (size: string | number | undefined) => (
      <MdOutlineCamera size={size} />
    ),
  },
  {
    id: 3,
    productTitle: "roll",
    description: "all verity of roll are present",
    price: 1500,
    categoryName: "photo Rental",
    component: (size: string | number | undefined) => (
      <MdCameraRoll size={size} />
    ),
  },
  {
    id: 4,

    productTitle: "video",
    description: "all verity of video are present",
    price: 11500,
    categoryName: "photo Rental",
    component: (size: string | number | undefined) => (
      <BiSolidCameraMovie size={size} />
    ),
  },
  {
    id: 5,
    productTitle: "battery",
    description: "all verity of battery are present",
    price: 11500,
    categoryName: "photo Rental",
    component: (size: string | number | undefined) => (
      <PiBatteryHighBold size={size} />
    ),
  },
];
