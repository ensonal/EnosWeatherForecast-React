import React from "react";
import "./TableColumnCell.css";

interface ColumnCellProps {
    content: string;
    isLastColumn?: boolean;
}

const ColumnCell: React.FC<ColumnCellProps> = ({ content, isLastColumn }) => {
    return (
        <div className={`column-cell ${isLastColumn ? "last-column" : ""}`}>
            <p className="column-cell-content m-0">{content}</p>
        </div>
    );
};

export default ColumnCell;
