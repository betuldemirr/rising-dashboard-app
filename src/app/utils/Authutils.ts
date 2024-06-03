export const getAuthToken = (): string | null => {
    return localStorage.getItem('authToken');
};

export const setAuthToken = (token: string): void => {
    localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
    localStorage.removeItem('authToken');
};