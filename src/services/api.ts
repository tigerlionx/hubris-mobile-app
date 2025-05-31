import axios from 'axios';

const API_BASE_URL = 'https://api.hubris.com'; // Replace with your actual API base URL

// Function to get all services
export const getAllServices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/services`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching services: ' + error.message);
    }
};

// Function to book a professional service
export const bookService = async (serviceId, userDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/services/book`, {
            serviceId,
            userDetails,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error booking service: ' + error.message);
    }
};

// Function to get business locations
export const getBusinessLocations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/business-locations`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching business locations: ' + error.message);
    }
};

// Function to get user account details
export const getUserAccountDetails = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user account details: ' + error.message);
    }
};