import axios from 'axios';

// Base URL for the API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchItems = async () => {
  try {
    // Making GET request to the API
    const response = await axios.get(API_URL);
    // Returning the data from the response
    return response.data;
  } catch (error) {
    // Throwing an error if the request fails
    throw new Error('Failed to fetch data');
  }
};
