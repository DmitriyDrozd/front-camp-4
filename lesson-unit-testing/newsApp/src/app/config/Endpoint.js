const API_KEY = 'apiKey=b9d575a774ac4011b9a10a7584c32ce1';
const ENDPOINT = 'https://newsapi.org/v2/';
const LOCAL_ENDPOINT = 'http://localhost:8080';

const SOURCES = `${ENDPOINT}sources?${API_KEY}`;
const NEWS = `${ENDPOINT}everything?${API_KEY}`;

export {
    API_KEY,
    NEWS,
    LOCAL_ENDPOINT,
    SOURCES,
};
