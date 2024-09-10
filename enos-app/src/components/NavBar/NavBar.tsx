import "../NavBar/NavBar.css";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <div className="custom-nav d-flex align-items-center">
            <div className="d-flex flex-row justify-content-between w-100">
                <p className="nav-header m-0" onClick={handleClick}>
                    Enos Weather Forecaster
                </p>
                <img src={logo} alt="logo" className="nav-logo" />
            </div>
        </div>
    );
}
