import React from "react";

const Forecast = () => {
  const data = [
    {
      time: "07:00 AM",
      icon: "https://openweathermap.org/img/wn/01d@2x.png",
      value: "14",
    },
    {
      time: "07:00 AM",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      value: "14",
    },
    {
      time: "07:00 AM",
      icon: "https://openweathermap.org/img/wn/03d@2x.png",
      value: "14",
    },
    {
      time: "07:00 AM",
      icon: "https://openweathermap.org/img/wn/04d@2x.png",
      value: "15",
    },
    {
      time: "07:00 AM",
      icon: "https://openweathermap.org/img/wn/09d@2x.png",
      value: "14",
    },
  ];
  return (
    <div className="">
      <div className="uppercase font-medium">3 hour step forecast</div>
      <hr className="h-1 my-1" />
      <div className="flex flex-row justify-between flex-wrap">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-1 mt-2">
              <div className="text-xs font-medium">{item.time}</div>
              <div className="w-12 shadow-md rounded-full bg-blue-300">
                <img src={item.icon} alt="" />
              </div>
              <div className="font-medium">{item.value}°</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
