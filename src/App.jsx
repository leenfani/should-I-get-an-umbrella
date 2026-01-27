import "./App.css";
import { UseTheme } from "./Theme";
import WeatherCard from "./Weathercard";

// EXTERNAL
import { useApi } from "./customHooks/useApi";

function App() {
  const {temp, weatherMessage} = useApi()
  return (
    <>
      <UseTheme>
        <WeatherCard temp={temp} weatherMessage={weatherMessage}/>
      </UseTheme>
    </>
  );
}

export default App;
