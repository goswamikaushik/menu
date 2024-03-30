import React, { useState } from "react";
import { BsCaretLeftFill, BsCaretDownFill } from "react-icons/bs";

function Accrodion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <BsCaretDownFill /> : <BsCaretLeftFill />}
      </span>
    );

    return (
      <div key={item?.id}>
        <div
          className="flex p-3 bg-gray-900 cursor-pointer border-b-2 border-gray-400 text-white items-center justify-between"
          onClick={() => handleClick(index)}
        >
          {item?.lable}
          {icon}
        </div>
        {isExpanded && <div className="bg-sky-100 p-3">{item?.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accrodion;
