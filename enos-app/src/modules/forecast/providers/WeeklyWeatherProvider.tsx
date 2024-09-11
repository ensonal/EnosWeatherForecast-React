import React, { createContext, useState, ReactNode } from "react";
import { get } from "../../../api/axiosClient";
import { mapWeatherData, WeatherData } from "../models/WeatherData";

interface WeatherContextType {
    weatherData: WeatherData[] | undefined;
    fetchWeather: (city: string) => Promise<void>;
    loading: boolean;
    error: string | null;
    setSelectedWeatherData: (data: WeatherData) => void;
    selectedWeatherData?: WeatherData;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
    children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherData[] | undefined>(undefined);
    const [selectedWeatherData, setSelectedWeatherData] = useState<WeatherData>();
    const [cache, setCache] = useState<{ [city: string]: WeatherData[] }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (city: string) => {
        if (cache[city]) {
            setWeatherData(cache[city]);
            setSelectedWeatherData(cache[city][0]);
            return;
        }

        setLoading(true);
        setError(null);

        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

        try {
            const response = await get(`/forecast/daily?city=${city}&key=${API_KEY}&days=7&units=M`);

            if (!response) {
                setWeatherData([]);
                setSelectedWeatherData(undefined);
            }

            const transformedData = mapWeatherData(response);

            setWeatherData(transformedData);
            setSelectedWeatherData(transformedData[0]);
            setCache((prevCache) => ({
                ...prevCache,
                [city]: transformedData
            }));
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                fetchWeather,
                loading,
                error,
                setSelectedWeatherData,
                selectedWeatherData
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
