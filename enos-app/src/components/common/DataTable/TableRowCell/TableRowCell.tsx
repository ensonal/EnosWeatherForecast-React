import React from "react";
import "./TableRowCell.css";

interface RowCellProps {
    content: string;
    isLastColumn?: boolean;
}

const RowCell: React.FC<RowCellProps> = ({ content, isLastColumn }) => {
    return (
        <div className={`row-cell ${isLastColumn ? "last-column" : ""}`}>
            <p className="row-cell-content m-0">{content}</p>
        </div>
    );
};

export default RowCell;
