import forecastWelcomeBanner from "../../../../assets/images/forecast-welcome-banner.png";
export function ForecastTableContainer() {
    return (
        <div>
            <img src={forecastWelcomeBanner} alt="Welcome to the forecast page" className="w-100 h-100" />
        </div>
    );
}
