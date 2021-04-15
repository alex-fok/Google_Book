import {useState} from 'react';
import Searcher from '../../components/Searcher';
import BookList from '../../components/BookList';

import GoogleBookAPI from '../../utils/GoogleBookAPI';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [bookList, setBookList] = useState([]);
  
  const searchForBook = async() => {
    const results = (await GoogleBookAPI.searchFor(keyword)).data;
    console.log(results);
  }

  return (
    <div>
      <Searcher
        handleInputChange={(e) => setKeyword(e.target.value)}
        search={searchForBook}
      />
      {
        noResults
          ? <div className='text-danger'>No Results Found</div>
          : <BookList books={bookList}/>
      }
      
    </div>
  );
}

export default Search;