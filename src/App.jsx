import "./App.css";
import { UseTheme } from "./Theme";
import WeatherCard from "./Weathercard";

// EXTERNAL
import { useApi } from "./customHooks/useApi";

function App() {
  const {temp} = useApi()
  return (
    <>
      <UseTheme>
        <WeatherCard temp={temp}/>
      </UseTheme>
    </>
  );
}

export default App;
