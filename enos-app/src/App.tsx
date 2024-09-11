import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/Routes";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ScreenSizeProvider } from "./providers/ScreenSizeProvider";

function App() {
    return (
        <div className="App">
            <ScreenSizeProvider>
                <Router>
                    <NavBar />
                    <Routes />
                </Router>
            </ScreenSizeProvider>
        </div>
    );
}

export default App;
