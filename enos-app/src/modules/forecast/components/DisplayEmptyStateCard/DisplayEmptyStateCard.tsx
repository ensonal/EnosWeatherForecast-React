import "./DisplayEmptyStateCard.css";

const DisplayEmptyStateCard = () => {
    return (
        <div className="default-card empty-state-card">
            <div className="text-content d-flex flex-column">
                <p className="content-title">Does not exist</p>
                <p className="content-subtitle">Type a valid city name to get weekly forecast data.</p>
            </div>
        </div>
    );
};

export default DisplayEmptyStateCard;
