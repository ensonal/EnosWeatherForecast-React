import { Column } from "../../../../components/common/DataTable/models/Column";
import "./WeatherCardTable.css";

interface WeatherCardTableProps {
    title: string;
    columns: Column[];
    data: any[];
    onRowClick: (row: any) => void;
    loading?: boolean;
}

export function WeatherCardTable({ title, columns, data, onRowClick, loading }: WeatherCardTableProps) {
    const renderCard = (columns: Column[], rowData: any) => {
        return (
            <div className="card-content d-flex flex-wrap gap-5">
                {columns.map((column) => (
                    <div className="card-column d-flex flex-column" key={column.accessor}>
                        <p className="column-header">{column.header}</p>
                        <p className="column-data">{rowData[column.accessor]}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="default-card card-container d-flex flex-column">
            <div className="card-title-container d-flex align-items-center justify-content-center">
                <p className="card-title m-0">{title}</p>
            </div>
            <div className="card-body">
                {data.map((rowData, index) => (
                    <div key={index}>
                        <div className="weather-card" onClick={() => onRowClick(rowData)}>
                            {renderCard(columns, rowData)}
                        </div>
                        {index !== data.length - 1 && <div className="divider" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
