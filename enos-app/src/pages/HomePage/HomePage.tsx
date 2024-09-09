import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/forecast");
    };

    return (
        <div className="home-page">
            <h1 onClick={handleClick}>Home Page</h1>
            <p>Welcome to the Home Page</p>
        </div>
    );
}
