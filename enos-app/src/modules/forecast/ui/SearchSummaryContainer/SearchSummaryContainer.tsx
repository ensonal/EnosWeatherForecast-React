import { SearchInputField } from "../../../../components/common/SearchInputField/SearchInputField";
import DisplayEmptyStateCard from "../../components/DisplayEmptyStateCard/DisplayEmptyStateCard";
import SelectInfoCard from "../../components/SelectInfoCard/SelectInfoCard";

export function SearchSummaryContainer() {
    return (
        <div className="d-flex flex-column gap-3">
            <SearchInputField />
            <SelectInfoCard />
            <DisplayEmptyStateCard />
        </div>
    );
}
