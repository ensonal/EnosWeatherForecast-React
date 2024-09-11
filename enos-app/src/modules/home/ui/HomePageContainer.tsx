import { useNavigate } from "react-router-dom";
import banner from "../../../assets/images/home-page-banner.png";
import "./HomePageContainer.css";

export function HomePageContainer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/forecast");
    };

    return (
        <div className="home-container d-flex flex-row justify-content-between">
            <div className="container-two d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3">
                    <p className="header">What's the weather like today?</p>
                    <div className="divider"></div>
                </div>
                <p className="sub-text">
                    Stay updated with the most accurate weather reports to know what to expect throughout the
                    day. No matter where you are, get real-time weather updates before stepping outside.
                </p>
                <div className="button-container" onClick={handleClick}>
                    <p className="action-text m-0">Let's try</p>
                </div>
            </div>
            <div className="container-one">
                <img src={banner} alt="Welcome to Enos" width={700} className="w-100 object-fit-contain" />
            </div>
        </div>
    );
}
