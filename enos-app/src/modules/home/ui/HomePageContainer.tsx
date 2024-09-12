import { useNavigate } from "react-router-dom";
import banner from "../../../assets/images/home-page-banner.png";
import "./HomePageContainer.css";
import { useScreenSize } from "../../../providers/ScreenSizeProvider";

export function HomePageContainer() {
    const { isHomePageMobile } = useScreenSize();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/forecast");
    };

    const flexDirectionClass = isHomePageMobile ? "flex-column" : "flex-row";
    const fontClass = isHomePageMobile ? "fs-3" : "";
    const gapClass = isHomePageMobile ? "gap-3" : "gap-5";

    return (
        <div className={`home-container d-flex ${flexDirectionClass} justify-content-between`}>
            <div className={`container-two d-flex flex-column ${gapClass}`}>
                <div className="d-flex flex-column gap-3">
                    <p className={`header ${fontClass}`}>What's the weather like today?</p>
                    <div className="divider-home"></div>
                </div>
                <p className="sub-text">
                    Stay updated with the most accurate weather reports to know what to expect throughout the
                    day. No matter where you are, get real-time weather updates before stepping outside.
                </p>
                <div className={`button-container ${isHomePageMobile ? "align-self-center" : ""}`} onClick={handleClick}>
                    <p className="action-text m-0">Let's try</p>
                </div>
            </div>
            <div className="container-one">
                <img src={banner} alt="Welcome to Enos" width={700} className="w-100 object-fit-contain" />
            </div>
        </div>
    );
}
