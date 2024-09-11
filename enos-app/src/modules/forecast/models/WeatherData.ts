export interface WeatherData {
    city: string;
    day: string;
    date: string;
    lowestTemp: number;
    highestTemp: number;
    averageTemp: number;
    weather: {
        code: number;
        icon: string;
        description: string;
    };
}

export function mapWeatherData(data: any): WeatherData[] {
    return data.data.map((day: any) => ({
        city: data.city_name,
        day: new Date(day.datetime).toLocaleDateString("en-US", { weekday: "long" }),
        date: new Date(day.datetime).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        lowestTemp: day.low_temp.toFixed(0) + " °C",
        highestTemp: day.high_temp.toFixed(0) + " °C",
        averageTemp: day.temp.toFixed(0) + " °C",
        weather: {
            code: day.weather.code,
            icon: day.weather.icon,
            description: day.weather.description
        }
    }));
}