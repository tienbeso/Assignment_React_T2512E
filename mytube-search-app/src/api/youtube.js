import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: API_KEY,
        type: 'video'
    }
});