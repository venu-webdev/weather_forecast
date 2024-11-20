import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdLocate } from "react-icons/io";

const SearchRow = ({ activeBtn, setActiveBtn, setCity }) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row gap-10 justify-center">
      <div className="flex gap-2 justify-center items-center">
        <input
          type="text"
          placeholder="Search by City..."
          className="p-2 px-4 outline-none rounded-full shadow-md"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="w-10 h-10 rounded-full hover:bg-blue-200 cursor-pointer hover:text-blue-900 flex justify-center items-center">
          <FiSearch
            size={25}
            onClick={() => {
              if (input) setCity(input);
            }}
          />
        </div>
        <div className="w-10 h-10 rounded-full hover:bg-blue-200 cursor-pointer hover:text-blue-900 flex justify-center items-center">
          <IoMdLocate size={25} />
        </div>
      </div>
      <div className="font-medium text-xl flex items-center justify-center gap-1">
        <button
          className={`${
            activeBtn === "metric" ? "active" : "inactive"
          } flex justify-center shadow-md items-center cursor-pointer p-2 transition ease-out  w-10 h-10  rounded-full`}
          onClick={() => setActiveBtn("metric")}
        >
          °C
        </button>
        <button
          className={`${
            activeBtn === "metric" ? "inactive" : "active"
          } flex justify-center shadow-md items-center cursor-pointer p-2 transition ease-out w-10 h-10 rounded-full`}
          onClick={() => setActiveBtn("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchRow;
