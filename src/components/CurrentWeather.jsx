import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { LuWind } from "react-icons/lu";

import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CurrentWeather = ({ activeBtn, data }) => {
  console.log("subbu: ", data);
  const weatherStats = [
    {
      icon: <FaThermometerEmpty />,
      title: "Real Feel",
      value: data.feels_like,
      units: activeBtn === "metric" ? "°C" : "°F",
    },
    {
      icon: <IoWater />,
      title: "Humidity",
      value: data.humidity,
      units: "%",
    },
    {
      icon: <LuWind />,
      title: "Wind",
      value: data.speed,
      units: activeBtn === "metric" ? "km/s" : "m/s",
    },
  ];

  const extraStats = [
    {
      icon: <GiSunrise />,
      title: "Rise",
      value: data.sunrise,
      hasDeg: false,
    },
    {
      icon: <GiSunset />,
      title: "Set",
      value: data.sunset,
      hasDeg: false,
    },
    {
      icon: <MdKeyboardArrowUp />,
      title: "High",
      value: Math.round(data.temp_max),
      hasDeg: true,
    },
    {
      icon: <MdKeyboardArrowDown />,
      title: "Low",
      value: Math.round(data.temp_min),
      hasDeg: true,
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-light text-base">{data?.formatedLocalTime}</p>
      <h2 className="text-xl font-semibold mt-5 my-2">
        {data.name}, {data.country}
      </h2>
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <img src={data.icon} className="w-18 ml-[-20px]" alt="" />
          <div>
            <div className="text-blue-500 font-medium text-center text-sm">
              {data?.details}
            </div>
            <div className="text-5xl font-medium text-blue-500">
              {Math.round(data.feels_like)}
              <span className="ml-1 text-sm">
                °{activeBtn === "metric" ? "C" : "F"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            {weatherStats.map((stat, i) => {
              return (
                <div key={i} className="flex gap-1 items-center text-xs">
                  <div className="text-base text-blue-500">{stat.icon}</div>
                  <span>{stat.title}:</span>
                  <span className="font-semibold">
                    {stat.value} {stat.units}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* extra details of current weather */}
      <div className="flex gap-4 my-2 justify-between flex-wrap md:gap-10">
        {extraStats.map((stat, i) => {
          return (
            <div
              key={i}
              className="text-xs flex gap-1 justify-center items-center"
            >
              <div className="text-xl">{stat.icon}</div>
              <span>{stat.title}:</span>
              <span className="font-semibold">
                {stat.value}
                {stat.hasDeg ? "°" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeather;
