import axios from 'axios';

const KEY = 'AIzaSyBRFfOsER9gBhFqcJHu51-rVAKr-tuelec';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
