import axios from 'axios';
import { API_URL } from '../utils/constants';
import { User } from '../types';

export const login = async (email: string, password: string): Promise<User> => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
};

export const register = async (userData: User): Promise<User> => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const logout = async (): Promise<void> => {
    await axios.post(`${API_URL}/auth/logout`);
};

export const getCurrentUser = async (): Promise<User> => {
    const response = await axios.get(`${API_URL}/auth/current-user`);
    return response.data;
};