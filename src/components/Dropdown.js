import React, { useEffect, useState, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);

    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-300 rounded cursor-pointer p-1.5"
        onClick={() => handleOptionClick(option)}
        key={option?.value}
      >
        {option?.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between font-bold items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <div className="text-xl">
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full font-semibold ">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
