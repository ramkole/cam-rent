import { CategoryData } from "../lib/CategoryData";

const CategaoryItems = () => {
  return (
    <div className=" flex justify-around container bg-yellow-100 mx-auto mt-3 gap-x-5 w-3/4 rounded-md overflow-x-scroll border border-amber-300 no-scrollbar p-3">
      {CategoryData.map((component) => component.component(30))}
    </div>
  );
};

export default CategaoryItems;
