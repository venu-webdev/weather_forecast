import { DateTime } from "luxon";

const API_KEY = "4ea058e2f5a5534858d545e36c89b405";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatedIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

const formatToLocalTime = (
    secs,
    offset,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = async (searchParams) => {
    console.log("in fn: searchParams: ", searchParams)
    const {
        name,
        timezone,
        dt,
        sys: { country, sunrise, sunset },
        wind: { speed },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        weather,
    } = await getWeatherData("weather", searchParams);

    const { main: details, icon } = weather[0];
    const formatedLocalTime = formatToLocalTime(dt, timezone)

    return {
        name,
        timezone,
        country,
        temp,
        feels_like,
        speed,
        temp_min,
        temp_max,
        humidity,
        icon: formatedIcon(icon),
        details,
        sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
        sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
        formatedLocalTime
    };
};
export default formatCurrent;
