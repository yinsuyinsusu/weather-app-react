import "./App.css";
import WeatherSearch from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherForm">
          <WeatherSearch />
          <button className="current">Current</button>
          <div className="currentCity">
            <div>Lisbon</div>
            <div>Saturday 21:59</div>
            <div>Clouds</div>
            <span>
              <img
                src="https://static.thenounproject.com/png/1906727-200.png"
                alt="cloud"
                width="50px"
              ></img>
            </span>
            <div>
              <span>20°C</span>
            </div>
          </div>
          <div className="currentExtra">
            <div>Precipitation:92%</div>
            <div>Wind: 9km/h</div>
          </div>
        </div>
        <div className="footer">
          <a
            href="https://github.com/yinsuyinsusu/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Yinsu Zhou
        </div>
      </div>
    </div>
  );
}

export default App;
