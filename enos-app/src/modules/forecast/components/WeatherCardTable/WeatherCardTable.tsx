import "./WeatherCardTable.css";

interface WeatherCardTableProps {
    title: string;
    data: any[];
    onRowClick: (row: any) => void;
    loading?: boolean;
}

export function WeatherCardTable({ title, data, onRowClick, loading }: WeatherCardTableProps) {
    const renderCard = (rowData: any) => {
        console.log("columns", rowData);
        return (
            <div className="d-flex flex-row justify-content-between gap-2">
                <div className="d-flex flex-column flex-wrap">
                    <p className="data-text fw-semibold m-0">{rowData.day}</p>
                    <p className="data-text m-0">{rowData.date}</p>
                </div>
                <div className="d-flex flex-column">
                    <p className="data-text fw-semibold m-0">Lowest Temp.</p>
                    <p className="data-text m-0">{rowData.low}</p>
                </div>
                <div className="d-flex flex-column">
                    <p className="data-text fw-semibold m-0">Highest Temp.</p>
                    <p className="data-text m-0">{rowData.high}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="default-card card-container d-flex flex-column mb-3">
            <div className="card-title-container d-flex align-items-center justify-content-center">
                <p className="card-title m-0">{title}</p>
            </div>
            <div className="card-body">
                {data.map((rowData, index) => (
                    <div key={index}>
                        <div className="weather-card" onClick={() => onRowClick(rowData)}>
                            {renderCard(rowData)}
                        </div>
                        {index !== data.length - 1 && <div className="divider w-100" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
