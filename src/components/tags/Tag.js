import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSeleted } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const isSelected = selectedTags.includes(title) ? true : false;
  const handleSeleted = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSeleted(title));
    }
  };

  //style
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <div className={style} onClick={handleSeleted}>
      {title}
    </div>
  );
};

export default Tag;

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
          redux
        </div> */
}
