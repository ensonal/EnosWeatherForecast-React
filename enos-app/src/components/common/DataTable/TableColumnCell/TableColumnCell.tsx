import React from "react";
import "./TableColumnCell.css";

interface ColumnCellProps {
    content: string;
    isLastColumn?: boolean;
    loading?: boolean;
}

const ColumnCell: React.FC<ColumnCellProps> = ({ content, isLastColumn, loading }) => {
    return (
        <div className={`column-cell ${isLastColumn ? "last-column" : ""}`}>
            {loading ? (
                <p className="placeholder-glow m-0 w-75">
                    <span className="placeholder rounded-3 w-100"></span>
                </p>
            ) : (
                <p className="column-cell-content m-0">{content}</p>
            )}
        </div>
    );
};

export default ColumnCell;
