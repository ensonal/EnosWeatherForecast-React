import DataTable from "../../../../components/common/DataTable/DataTable";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export function ForecastTableContainer() {
    const { weatherData, loading, error } = useWeatherContext();

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

    const title = `Weather Forecast for ${weatherData[0]?.city}`;

    return (
        <div className="w-100">
            <DataTable title={title} columns={columns} data={forecastData ? forecastData : []} />
        </div>
    );
}
