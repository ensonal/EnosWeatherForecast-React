import React, { FC } from "react";
import "./TableRowCell.css";

interface RowCellProps {
    content: string;
    isLastColumn?: boolean;
    onClick?: () => void;
    loading?: boolean;
}

const RowCell: FC<RowCellProps> = ({ content, isLastColumn, onClick, loading }) => {
    return (
        <div className={`row-cell ${isLastColumn ? "last-column" : ""}`} onClick={onClick}>
            {loading ? (
                <p className="placeholder-glow m-0 w-75">
                    <span className="placeholder rounded-3 w-100"></span>
                </p>
            ) : (
                <p className="row-cell-content m-0">{content}</p>
            )}
        </div>
    );
};

export default RowCell;
