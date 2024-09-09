import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/forecast");
    };

    return (
        <div className="default-page">
            <h1 onClick={handleClick}>Home Page</h1>
            <p>Welcome to the Home Page</p>
        </div>
    );
}
