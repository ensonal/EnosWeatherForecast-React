import React from "react";
import TableColumnCell from "./TableColumnCell/TableColumnCell";
import TableRowCell from "./TableRowCell/TableRowCell";
import "./DataTable.css";

interface Column {
    header: string;
    accessor: string;
}

interface DataTableProps {
    title: string;
    columns: Column[];
    data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ title, columns, data }) => {
    const containerStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        gap: "0",
        borderRadius: "10px"
    };

    return (
        <div className="table-container d-flex flex-column">
            <div className="table-title-container">
                <p className="table-title m-0">{title}</p>
            </div>
            <div style={containerStyle}>
                {columns.map((column, index) => (
                    <TableColumnCell
                        key={index}
                        content={column.header}
                        isLastColumn={index === columns.length - 1}
                    />
                ))}

                {data.map((row, rowIndex) =>
                    columns.map((column, colIndex) => (
                        <TableRowCell
                            key={`${rowIndex}-${colIndex}`}
                            content={row[column.accessor]}
                            isLastColumn={colIndex === columns.length - 1}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default DataTable;
