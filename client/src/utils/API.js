import axios from 'axios';

const searchFor = (keyword) => axios.get(`/api/search?title=${keyword}`);

const saveBook = (props) => axios.post('/api/book', props);

const deleteBook = (id) => axios.delete('/api/book', {data: {id: id}});

const getBooks = () => axios.get('/api/books');

const API = {
  searchFor,
  saveBook,
  deleteBook,
  getBooks
}

export default API;