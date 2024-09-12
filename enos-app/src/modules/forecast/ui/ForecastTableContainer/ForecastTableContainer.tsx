import DataTable from "../../../../components/common/DataTable/DataTable";
import { useWeatherContext } from "../../hooks/useWeatherContext";
import forecastWelcomeBanner from "../../../../assets/images/forecast-welcome-banner.png";
import forecastEmptyStateBanner from "../../../../assets/images/forecast-empty-state.png";
import { useScreenSize } from "../../../../providers/ScreenSizeProvider";
import { WeatherCardTable } from "../../components/WeatherCardTable/WeatherCardTable";

export function ForecastTableContainer() {
    const { weatherData, loading, setSelectedWeatherData } = useWeatherContext();
    const { isMobile } = useScreenSize();

    const columns = [
        { header: "Days", accessor: "day" },
        { header: "Dates", accessor: "date" },
        { header: "Lowest Temp.", accessor: "low" },
        { header: "Highest Temp.", accessor: "high" }
    ];

    const forecastData = weatherData?.map((data) => ({
        day: data.day,
        date: data.date,
        low: data.lowestTemp,
        high: data.highestTemp,
        defaultData: data
    }));

    const title = weatherData && weatherData.length > 0 ? `Weather Forecast for ${weatherData[0]?.city}` : "";

    const handleRowClick = (row: any) => {
        setSelectedWeatherData(row.defaultData);
    };

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
            ) : isMobile ? (
                <WeatherCardTable
                    title={title}
                    data={forecastData ? forecastData : []}
                    onRowClick={handleRowClick}
                    loading={loading}
                />
            ) : (
                <DataTable
                    title={title}
                    columns={columns}
                    data={forecastData ? forecastData : []}
                    onRowClick={handleRowClick}
                    loading={loading}
                />
            )}
        </div>
    );
}
