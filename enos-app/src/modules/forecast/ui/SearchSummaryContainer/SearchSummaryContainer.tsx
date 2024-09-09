import { SearchInputField } from "../../../../components/common/SearchInputField/SearchInputField";
import { WeatherSummaryCard } from "../../components/WeatherSummaryCard/WeatherSummaryCard";

export function SearchSummaryContainer() {
    return (
        <div className="d-flex flex-column gap-3">
            <SearchInputField />
            <WeatherSummaryCard />
        </div>
    );
}
