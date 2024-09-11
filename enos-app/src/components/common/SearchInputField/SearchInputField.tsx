import { useState } from "react";
import "./SearchInputField.css";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import { useWeatherContext } from "../../../modules/forecast/hooks/useWeatherContext";

export function SearchInputField() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { fetchWeather, loading } = useWeatherContext();

    const handleSearch = async () => {
        if (!searchTerm) return;

        await fetchWeather(searchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="default-card input-container d-flex flex-row align-items-center justify-content-between w-100">
            <input
                type="text"
                className="text-input-field w-100 h-100 border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search a city"
                disabled={loading}
            />
            <img
                src={searchIcon}
                alt="search-icon"
                className="search-icon"
                onClick={handleSearch}
                style={{ cursor: loading ? "not-allowed" : "pointer" }}
            />
        </div>
    );
}
