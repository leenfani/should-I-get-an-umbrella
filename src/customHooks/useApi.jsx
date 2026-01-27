// REACT

import { useEffect, useState, useMemo } from "react";

// EXTERNAL

import axios from "axios";
import { useLanguage } from "./useLanguage";

export function useApi() {
  const { isAr } = useLanguage();
  const [temp, setTemp] = useState({
    current: null,
    min: null,
    max: null,
    description: "",
    responseicon: null,
    conditionId: null,
  });
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        signal: controller.signal,
        params: {
          lat: 51.51,
          lon: 0.13,
          appid: "d73ab6fd24270f891d3b61d138f256f2",
          units: "metric",
          lang: isAr ? "ar" : "en",
        },
      })
      .then((response) => {
        const data = response.data;

        setTemp({
          current: Math.round(data.main.temp),
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          description: data.weather[0].description,
          responseicon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          conditionId: data.weather[0].id,
        });
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        console.log("ERRPR", error);
      });
    return () => {
      console.log("canceling");
      controller.abort();
    };
  }, [isAr]);
  const weatherMessage = useMemo(() => {
    const id = temp.conditionId;
    if (!id) return null;

    if (id >= 200 && id < 300)
      return {
        title: isAr ? "عاصفة" : "Storm",
        msg: isAr
          ? "عاصفة! المظلة لن تنفعك الآن، احتمِ في أقرب مكان!"
          : "Storm! Forget the umbrella, just run for cover!",
        type: "error",
      };
    if (id >= 300 && id < 600)
      return {
        title: isAr ? "مطر" : "Rain",
        msg: isAr ? "نعم، أحضر تلك المظلة!" : "YES get that umbrella!",
      };
    if (id >= 600 && id < 700)
      return {
        title: isAr ? "ثلج" : "Snow",
        msg: isAr
          ? "الجو بارد جداً بنحتاج اكثر من مجرد مظلة! وقت المعطف الشتوي"
          : "It's freezing outside we needs more than just an umbrella! time for a polar coat!",
      };

    return {
      title: isAr ? "مستقر" : "Stable",
      msg: isAr
        ? "يوم سعيد بدون مظلتك!"
        : "Have a nice day without your umbrella!",
    };
  }, [temp.conditionId, isAr]);

  return { temp, weatherMessage };
}
