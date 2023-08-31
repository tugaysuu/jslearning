
import axios from 'axios';

export default async (req, res) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const q = req.query.q || "Tokyo";
    const days = 7; 

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=${days}`);
        
        res.status(200).json(response.data);
        
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};
