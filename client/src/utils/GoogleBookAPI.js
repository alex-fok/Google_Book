import axios from 'axios';

const searchFor = (keyword) => axios(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);

const API = {
  searchFor
}

export default API;