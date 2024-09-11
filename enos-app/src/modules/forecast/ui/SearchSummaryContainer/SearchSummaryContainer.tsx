import { SearchInputField } from "../../../../components/common/SearchInputField/SearchInputField";
import { CurrentWeatherCard } from "../../components/CurrentWeatherCard/CurrentWeatherCard";
import DisplayEmptyStateCard from "../../components/DisplayEmptyStateCard/DisplayEmptyStateCard";
import SelectInfoCard from "../../components/SelectInfoCard/SelectInfoCard";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export function SearchSummaryContainer() {
    const { weatherData } = useWeatherContext();

    return (
        <div className="d-flex flex-column gap-3">
            <SearchInputField />
            {weatherData === undefined ? (
                <SelectInfoCard />
            ) : weatherData.length > 0 ? (
                <CurrentWeatherCard />
            ) : (
                <DisplayEmptyStateCard />
            )}
        </div>
    );
}
