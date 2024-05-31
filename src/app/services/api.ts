export interface LoginResponse {
    token: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch('https://recruitment-api.vercel.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Failed to credentials');
    }

    return response.json();
};