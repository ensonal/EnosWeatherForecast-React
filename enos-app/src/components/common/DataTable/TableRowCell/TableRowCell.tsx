import React, { FC } from "react";
import "./TableRowCell.css";

interface RowCellProps {
    content: string;
    isLastColumn?: boolean;
    onClick?: () => void;
}

const RowCell: FC<RowCellProps> = ({ content, isLastColumn, onClick }) => {
    return (
        <div className={`row-cell ${isLastColumn ? "last-column" : ""}`} onClick={onClick}>
            <p className="row-cell-content m-0">{content}</p>
        </div>
    );
};

export default RowCell;
