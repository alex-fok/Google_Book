import axios from 'axios';

const searchFor = (keyword) => axios.get(`/api/search?title=${keyword}`);

const saveBook = (props) => axios.post('/api/saveBook', props)

const API = {
  searchFor, saveBook
}

export default API;