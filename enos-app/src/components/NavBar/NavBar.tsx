import "../NavBar/NavBar.css";
import logo from "../../assets/logo/logo.png";

export function NavBar() {
    return (
        <div className="custom-nav d-flex align-items-center">
            <div className="d-flex flex-row justify-content-between w-100">
                <p className="nav-header m-0">Enos Weather Forecaster</p>
                <img src={logo} alt="logo" className="nav-logo" />
            </div>
        </div>
    );
}
