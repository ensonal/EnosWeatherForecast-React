import { useEffect } from "react";
import DataTable from "../../../../components/common/DataTable/DataTable";
import { useWeatherContext } from "../../hooks/useWeatherContext";
import forecastWelcomeBanner from "../../../../assets/images/forecast-welcome-banner.png";
import forecastEmptyStateBanner from "../../../../assets/images/forecast-empty-state.png";

export function ForecastTableContainer() {
    const { weatherData, loading } = useWeatherContext();

    useEffect(() => {
        console.log("Weather Data: ", weatherData);
    }, [weatherData]);

    const columns = [
        { header: "Days", accessor: "day" },
        { header: "Dates", accessor: "date" },
        { header: "Lowest Temp.", accessor: "low" },
        { header: "Highest Temp.", accessor: "high" }
    ];

    const forecastData = weatherData?.map((day) => ({
        day: day.day,
        date: day.date,
        low: day.lowestTemp,
        high: day.highestTemp
    }));

    const title = weatherData && weatherData.length > 0 ? `Weather Forecast for ${weatherData[0]?.city}` : "";

    return (
        <div className="w-100">
            {weatherData === undefined ? (
                <img src={forecastWelcomeBanner} alt="Welcome to the weather forecast" className="w-100" />
            ) : weatherData.length === 0 ? (
                <img
                    src={forecastEmptyStateBanner}
                    alt="No weather forecast data available"
                    className="w-100"
                />
            ) : (
                <DataTable title={title} columns={columns} data={forecastData ? forecastData : []} />
            )}
        </div>
    );
}
