// pages/api/weather.js
import axios from 'axios';

export default async (req, res) => {
    const APIKey = process.env.GEOLOCATION_API_KEY;

    try {
        const response = await axios.get(` https://ipgeolocation.abstractapi.com/v1/?api_key=${APIKey}`);
        
        res.status(200).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};