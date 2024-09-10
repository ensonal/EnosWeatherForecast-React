import "./CurrentWeatherCard.css";
import c04d from "../../../../assets/icons/weather/c04d.png";

export function CurrentWeatherCard() {
    return (
        <div className="default-card current-weather-card d-flex flex-column align-items-center justify-content-between">
            <p className="degree-text m-0">29 °C</p>
            <div className="general-info d-flex flex-column align-items-center">
                <p className="city-name m-0">Ankara</p>
                <p className="date-time m-0">August 27, Tuesday</p>
            </div>
            <div className="weather-status d-flex flex-row align-items-center">
                <img src={c04d} alt="weather status" className="weather-icon" />
                <p className="weather-status-text m-0">Overcast clouds</p>
            </div>
        </div>
    );
}
