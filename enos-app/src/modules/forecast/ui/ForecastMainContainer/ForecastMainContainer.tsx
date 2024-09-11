import { WeatherProvider } from "../../providers/WeeklyWeatherProvider";
import { ForecastTableContainer } from "../ForecastTableContainer/ForecastTableContainer";
import { SearchSummaryContainer } from "../SearchSummaryContainer/SearchSummaryContainer";
import "./ForecastMainContainer.css";

export function ForecastMainContainer() {
    return (
        <WeatherProvider>
            <div className="forecast-main-container d-flex flex-row justify-content-between">
                <div className="container-one">
                    <ForecastTableContainer />
                </div>
                <div className="container-two">
                    <SearchSummaryContainer />
                </div>
            </div>
        </WeatherProvider>
    );
}
