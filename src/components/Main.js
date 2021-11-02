import React, { useEffect, useState } from "react";
// import WeatherData from "../img/Weatherinformation.png";

const Main = () => {
  const [city, setCity] = useState(null);
  const [inputData, setInput] = useState("Birgunj");
  const [condition, setCondition] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=22cd669bb16b3765f9ad8af1cc51ec6b`;
      const response = await fetch(url);
      const toJson = await response.json();
      setCity(toJson.main);
      setCondition(toJson);
    };
    fetchApi();
  }, [inputData]);
  const inputVal = (e) => setInput(e.target.value);

  return (
    <>
      <div className="container mx-auto		mt-10 flex justify-center font-mono	items-center 	">
        <div className="container border-2 h-96	w-80 ring-indigo-300 flex justify-start items-center	bg-gradient-to-b from-blue-400 via-blue-600	to-blue-900 rounded-2xl	flex-col	">
          <div className="mt-10">
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="search"
              placeholder="Search"
              onChange={inputVal}
              value={inputData}
            />
          </div>
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <>
              <div className="container flex justify-center items-center mt-16">
                <div className="animate__animated animate__wobble animate__delay-5s animate__infinite  animate__slow ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-200 	"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl	text-center font-bold	text-white">
                  {condition.name}
                </h1>
              </div>
              <div className="container mt-4 flex justify-center flex-col items-center">
                <div className="container flex justify-center flex-row items-center">
                  <h3 className="text-xl font-bold	text-white mr-2">
                    {city.temp}°c
                  </h3>
                </div>
                <h4 className="text-xs font-bold	 mt-4 text-indigo-50">
                  Min : {city.temp_min}°c | Max : {city.temp_max}°c
                </h4>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
