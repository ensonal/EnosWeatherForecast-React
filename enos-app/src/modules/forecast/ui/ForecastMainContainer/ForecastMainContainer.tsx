import { useScreenSize } from "../../../../providers/ScreenSizeProvider";
import { WeatherProvider } from "../../providers/WeeklyWeatherProvider";
import { ForecastTableContainer } from "../ForecastTableContainer/ForecastTableContainer";
import { SearchSummaryContainer } from "../SearchSummaryContainer/SearchSummaryContainer";
import "./ForecastMainContainer.css";

export function ForecastMainContainer() {
    const { isMobile, isTablet } = useScreenSize();

    const flexDirectionClass = isMobile || isTablet ? "flex-column-reverse" : "flex-row";

    return (
        <WeatherProvider>
            <div className={`forecast-main-container d-flex ${flexDirectionClass} justify-content-between`}>
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
