import React from "react";
import TableColumnCell from "./TableColumnCell/TableColumnCell";
import TableRowCell from "./TableRowCell/TableRowCell";
import "./DataTable.css";
import { Column } from "./models/Column";

interface DataTableProps {
    title: string;
    columns: Column[];
    data: any[];
    onRowClick: (row: any) => void;
    loading?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ title, columns, data, onRowClick, loading }) => {
    const containerStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, auto)`,
        borderRadius: "10px"
    };

    return (
        <div className="table-container d-flex flex-column">
            <div className="table-title-container">
                {loading ? (
                    <p className="placeholder-glow m-0 w-50">
                        <span className="placeholder rounded-3 w-100"></span>
                    </p>
                ) : (
                    <p className="table-title m-0">{title}</p>
                )}
            </div>

            <div style={containerStyle}>
                {columns.map((column, index) => (
                    <TableColumnCell
                        key={index}
                        content={column.header}
                        isLastColumn={index === columns.length - 1}
                        loading={loading}
                    />
                ))}

                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className="table-row" onClick={() => onRowClick(row)}>
                        {columns.map((column, colIndex) => (
                            <TableRowCell
                                key={`${rowIndex}-${colIndex}`}
                                content={row[column.accessor]}
                                isLastColumn={colIndex === columns.length - 1}
                                loading={loading}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTable;
