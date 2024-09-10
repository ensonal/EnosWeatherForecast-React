import React, { createContext, useState, ReactNode } from "react";
import { get } from "../../../api/axiosClient";
import { mapWeatherData, WeatherData } from "../models/WeatherData";

interface WeatherContextType {
    weatherData: WeatherData[] | null;
    fetchWeather: (city: string) => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
    children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);
    const [cache, setCache] = useState<{ [city: string]: WeatherData[] }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (city: string) => {
        if (cache[city]) {
            setWeatherData(cache[city]);
            return;
        }

        setLoading(true);
        setError(null);

        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

        try {
            const response = await get(`/forecast/daily?city=${city}&key=${API_KEY}&days=7&units=M`);
            console.log(response);

            const transformedData = mapWeatherData(response);

            setWeatherData(transformedData);
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
        <WeatherContext.Provider value={{ weatherData, fetchWeather, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};
