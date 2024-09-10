import { SearchInputField } from "../../../../components/common/SearchInputField/SearchInputField";
import { CurrentWeatherCard } from "../../components/CurrentWeatherCard/CurrentWeatherCard";
import DisplayEmptyStateCard from "../../components/DisplayEmptyStateCard/DisplayEmptyStateCard";
import SelectInfoCard from "../../components/SelectInfoCard/SelectInfoCard";

export function SearchSummaryContainer() {
    return (
        <div className="d-flex flex-column gap-3">
            <SearchInputField />
            <CurrentWeatherCard />
            <SelectInfoCard />
            <DisplayEmptyStateCard />
        </div>
    );
}
