// api.js
import axios from 'axios';

// Define the API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch posts from the API
export const fetchPosts = async () => {
    try {
        // Make a GET request to the API
        const response = await axios.get(API_URL);
        // Return the data from the response
        return response.data;
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Throw the error so it can be handled by the caller
        throw error;
    }
};
