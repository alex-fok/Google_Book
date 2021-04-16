import axios from 'axios';

const searchFor = (keyword) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);

const saveBook = (props) => axios.post('/saveBook', props)

const API = {
  searchFor, saveBook
}

export default API;