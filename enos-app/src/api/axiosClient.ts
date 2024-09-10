import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0',
    timeout: 10000,
});

export async function get(params: string) {
    const { data } = await apiClient.get(params);
    return data;
}

export default apiClient;
