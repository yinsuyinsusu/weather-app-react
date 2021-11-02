import "./App.css";
import WeatherSearch from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherForm">
          <div className="row">
            <WeatherSearch />
            <div className="col-6">
              <button className="current">Current</button>
            </div>
          </div>
          <div className="currentCity">
            <div className="city">London</div>
            <div className="time">Saturday 21:59</div>
            <div className="description">Clouds</div>
            <div className="row">
              <div className="col-6">
                <img
                  className="iconCurrent"
                  src="https://static.thenounproject.com/png/1906727-200.png"
                  alt="cloudy"
                  height="56px"
                ></img>
                <span className="temperature">20</span>
                <span className="celcusCurrent">°C</span>
              </div>
              <div className="col-6">
                <div className="currentExtra">
                  <div>Precipitation:92%</div>
                  <div>Wind: 9km/h</div>
                </div>
              </div>
            </div>
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
