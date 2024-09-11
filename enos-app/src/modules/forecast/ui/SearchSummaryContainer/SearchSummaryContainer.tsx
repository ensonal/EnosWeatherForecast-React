import { SearchInputField } from "../../../../components/common/SearchInputField/SearchInputField";
import { CurrentWeatherCard } from "../../components/CurrentWeatherCard/CurrentWeatherCard";
import DisplayEmptyStateCard from "../../components/DisplayEmptyStateCard/DisplayEmptyStateCard";
import SelectInfoCard from "../../components/SelectInfoCard/SelectInfoCard";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export function SearchSummaryContainer() {
    const { weatherData, cache } = useWeatherContext();

    return (
        <div className="d-flex flex-column gap-3">
            <SearchInputField />
            <DisplayEmptyStateCard />
            {weatherData.length > 0 ? <CurrentWeatherCard /> : null}
            {Object.keys(cache).length === 0 && weatherData.length === 0 ? <SelectInfoCard /> : null}
        </div>
    );
}
