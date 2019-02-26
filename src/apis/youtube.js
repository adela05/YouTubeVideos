import axios from 'axios';

const KEY = "AIzaSyAnIHuN8PkpgfG0JpyA8W0TBC5VUT34b_4";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});