import "./SelectInfoCard.css";
const SelectInfoCard = () => {
    return (
        <div className="default-card info-card">
            <div className="text-content d-flex flex-column">
                <p className="content-title">Select a City</p>
                <p className="content-subtitle">
                    Search and select a city to see results. Try typing the first letters of the city you
                    want.
                </p>
            </div>
        </div>
    );
};

export default SelectInfoCard;
