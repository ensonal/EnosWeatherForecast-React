import "./CurrentWeatherCard.css";
import c04d from "../../../../assets/icons/weather/c04d.png";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export function CurrentWeatherCard() {
    const { selectedWeatherData, loading } = useWeatherContext();

    const formattedDate = selectedWeatherData?.date.split(",")[0] + ", " + selectedWeatherData?.day;
    const iconPath = selectedWeatherData
        ? require(`../../../../assets/icons/weather/${selectedWeatherData.weather.icon}.png`)
        : c04d;

    return loading ? (
        <div className="default-card current-weather-card d-flex flex-column align-items-center">
            <div className="spinner-grow" role="status" />
        </div>
    ) : (
        <div className="default-card current-weather-card d-flex flex-column align-items-center justify-content-between">
            <p className="degree-text m-0">{selectedWeatherData?.averageTemp}</p>
            <div className="general-info d-flex flex-column align-items-center">
                <p className="city-name m-0">{selectedWeatherData?.city}</p>
                <p className="date-time m-0">{formattedDate}</p>
            </div>
            <div className="weather-status d-flex flex-row align-items-center">
                <img src={iconPath} alt="weather status" className="weather-icon" />
                <p className="weather-status-text m-0">{selectedWeatherData?.weather.description}</p>
            </div>
        </div>
    );
}
