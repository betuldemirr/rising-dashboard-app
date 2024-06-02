import { getAuthToken, setAuthToken } from '../utils/Authutils';

export interface LoginResponse {
    token: string;
}

const API_BASE_URL = 'https://recruitment-api.vercel.app';

const fetchWithInterceptor = async (url: string, options: RequestInit = {}) => {
    const token = getAuthToken();
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
        };
    }
    const response = await fetch(url, options);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
};

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const { token } = await response.json();
    setAuthToken(token);
    return { token };
};