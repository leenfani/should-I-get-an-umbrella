// REACT

import { useEffect } from "react";
import { useState } from "react";

// EXTERNAL
import axios from "axios";

export function useApi() {
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=0.13&appid=d73ab6fd24270f891d3b61d138f256f2",
      )
      .then(function (response) {
        setTemp(Math.round(response.data.main.temp - 275.15));
      })
      .catch(function (error) {
        console.log("ERROR", error);
      });
  }, []);

  return { temp };
}
