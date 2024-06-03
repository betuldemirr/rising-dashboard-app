import { getAuthToken, setAuthToken } from '../utils/Authutils';
import { LoginResponse } from '../models/LoginResponse';

const API_BASE_URL = 'https://recruitment-api.vercel.app';

export const fetchWithInterceptor = async (url: string, options: RequestInit = {}) => {
    const token = getAuthToken();
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `${token}`,
        };
    } else {
        throw new Error('Authentication token not found');
    }
    
    const response = await fetch(url, options);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
};

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response:Response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const jsonResponse = await response.json();
    setAuthToken(jsonResponse.jwt);
    return jsonResponse;
};

export const getTable = async () => {
    return fetchWithInterceptor(`${API_BASE_URL}/get-table`, {
        method: 'GET',
    });
};

export const getInfo = async () => {
    return fetchWithInterceptor(`${API_BASE_URL}/get-info`, {
        method: 'GET',
    });
};