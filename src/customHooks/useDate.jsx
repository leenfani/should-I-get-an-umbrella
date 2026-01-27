import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";

export function useDate(lang = "ar") {
  const date = dayjs().locale(lang);

  return {
    dayName: date.format("dddd"),
    monthYear: date.format("MMMM YYYY"),
  };
}
