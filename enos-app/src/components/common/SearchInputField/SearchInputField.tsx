import { useState, useEffect } from "react";
import "./SearchInputField.css";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import { useWeatherContext } from "../../../modules/forecast/hooks/useWeatherContext";
import { useDebounce } from "../../../hooks/useDebounce";

const fetchCitySuggestions = async (searchTerm: string) => {
    const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchTerm}`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "bbb2600f3fmsh692deb780e023b7p1aa4d8jsn4ebb08a51ab0"
        }
    });

    const data = await response.json();
    return data.data.map((city: any) => `${city.name}`);
};

export function SearchInputField() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const { fetchWeather, loading } = useWeatherContext();

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleSearch = async () => {
        if (!debouncedSearchTerm) return;
        await fetchWeather(debouncedSearchTerm);
        setSuggestions([]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm("");
        setSuggestions([]);
        fetchWeather(suggestion);
    };

    useEffect(() => {
        if (debouncedSearchTerm.length > 2) {
            const fetchSuggestions = async () => {
                const results = await fetchCitySuggestions(debouncedSearchTerm);
                setSuggestions(results);
            };
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div className="d-flex flex-column gap-3 align-items-center">
            <div className="default-card input-container d-flex flex-column align-items-center justify-content-between w-100">
                <div className="d-flex flex-row align-items-center justify-content-between w-100">
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
            </div>
            {suggestions.length > 0 && (
                <div className="default-card autocomplete-suggestions d-flex flex-column gap-1">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="suggestion-item p-2"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
