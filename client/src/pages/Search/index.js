import {useState} from 'react';
import Searcher from '../../components/Searcher';
import BookList from '../../components/BookList';

import GoogleBookAPI from '../../utils/GoogleBookAPI';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [bookList, setBookList] = useState([]);
  
  const searchForBook = async() => {
    const {items} = (await GoogleBookAPI.searchFor(keyword)).data;
    const results = items.map(b => ({
      title: b.volumeInfo.title,
      snippet: b?.searchInfo?.textSnippet ? b.searchInfo.textSnippet : '(No Snippet Available)',
      authors: b.volumeInfo?.authors ? b.volumeInfo.authors.join(', ') : '',
      image: b.volumeInfo?.imageLinks?.smallThumbnail ?  b.volumeInfo.imageLinks.smallThumbnail : '/favicon.ico'
    }))
    setBookList(results)
    setNoResults(results.length ? false : true)
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