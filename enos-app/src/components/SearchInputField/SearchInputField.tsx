import { useState } from "react";
import "./SearchInputField.css";
import searchIcon from "../../assets/icons/searchIcon.svg";

export function SearchInputField() {
    const [searchTerm, setSearchTerm] = useState<string>();

    return (
        <div className="default-card input-container d-flex flex-row align-items-center justify-content-between w-100">
            <input
                type="text"
                className="text-input-field w-100 h-100 border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search a city"
            />
            <img src={searchIcon} alt="search-icon" className="search-icon" />
        </div>
    );
}
