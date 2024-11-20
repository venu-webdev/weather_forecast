import SearchRow from "./components/SearchRow";
import SearchResults from "./components/SearchResults";
import { useEffect, useState } from "react";
import formatCurrent from "./weatherApi";

function App() {
  const [results, setResults] = useState([1]);
  const [activeBtn, setActiveBtn] = useState("imperial");
  // const [params, setParams] = useState({units: 'metric'})
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const getData = async (city) => {
    console.log("units: ", activeBtn);
    const data = await formatCurrent({
      q: city ? city : "Delhi",
      units: activeBtn,
    });
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData(city);
  }, [city, activeBtn]);
  // getData();

  return (
    <div className="bg-blue-100 w-full h-screen overflow-auto">
      <div className="flex mx-auto flex-col gap-5 p-10 justify-start h-fit max-w-4xl items-center transition ease-out">
        <SearchRow
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          setCity={setCity}
        />
        {results.length ? (
          <div className="bg-white w-full rounded-md p-5 shadow-lg">
            <SearchResults activeBtn={activeBtn} data={data} />
          </div>
        ) : (
          "Please Enter a city name"
        )}
      </div>
    </div>
  );
}

export default App;
