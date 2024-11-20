import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const SearchResults = ({ activeBtn, data }) => {
  return (
    <div className="py-5 px-10 flex flex-col gap-4">
      <div className="">
        <CurrentWeather activeBtn={activeBtn} data={data} />
      </div>
      {/* forecast */}
      <div className="flex py-5 rounded-lg w-full flex-col gap-8">
        <Forecast />
        <Forecast />
      </div>
    </div>
  );
};

export default SearchResults;
