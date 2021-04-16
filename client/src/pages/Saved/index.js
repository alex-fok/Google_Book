import { useState, useEffect } from 'react';
import BookList from '../../components/BookList';
import API from '../../utils/API';
import WarningMessage from '../../components/WarningMessage';

const Save = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const run = async () => {
      const {data} = await API.getBooks();
      setBookList(data)
    }
    run();
  }, []);

  const del = {
    type: 'Delete',
    theme: 'outline-danger',
    fn: async (props) => {
      try {
        await API.deleteBook(props._id);
        setBookList(prev => prev.slice().filter(book => book._id !== props._id));
      } catch(err) {
        console.log('Error: Cannot perform deletion');
      }
    }
  }

  return (
    <div>
      { bookList.length
        ? <BookList
            books={bookList}
            btn={del}
          />
        : <WarningMessage msg='No Books Found!' />
      }
    </div>
  )
}

export default Save;