import axios from 'axios';

const BASEURL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromAPI = async (url) => {
    const { data } = await axios.get(`${BASEURL}/${url}`, options);
    return data;
}
