import "./App.css";
import { UseTheme } from "./Theme";
import WeatherCard from "./Weathercard";

function App() {
  return (
    <>
      <UseTheme>
        <WeatherCard/>
      </UseTheme>
    </>
  );
}

export default App;
