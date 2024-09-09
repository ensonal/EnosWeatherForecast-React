import DataTable from "../../../../components/common/DataTable/DataTable";

export function ForecastTableContainer() {
    const columns = [
        { header: "Days", accessor: "day" },
        { header: "Dates", accessor: "date" },
        { header: "Lowest Temp.", accessor: "low" },
        { header: "Highest Temp.", accessor: "high" }
    ];

    const forecastData = [
        { day: "Monday", date: "August 26, 2024", low: "24°C", high: "30°C" },
        { day: "Tuesday", date: "August 27, 2024", low: "26°C", high: "31°C" },
        { day: "Wednesday", date: "August 28, 2024", low: "25°C", high: "32°C" },
        { day: "Thursday", date: "August 29, 2024", low: "24°C", high: "34°C" },
        { day: "Friday", date: "August 30, 2024", low: "25°C", high: "33°C" },
        { day: "Saturday", date: "August 31, 2024", low: "26°C", high: "33°C" },
        { day: "Sunday", date: "September 1, 2024", low: "23°C", high: "31°C" }
    ];

    return (
        <div>
            <DataTable title="Weather Forecast for Ankara" columns={columns} data={forecastData} />
        </div>
    );
}
