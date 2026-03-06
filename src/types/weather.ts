export interface WeatherState {
  current: number | null;
  min: number | null;
  max: number | null;
  description: string;
  responseicon: string | null;
  conditionId: number | null;
}
export interface WeatherMessage {
  title: string;
  msg: string;
  type?: "error" | "warning" | "info" | "success";
}
