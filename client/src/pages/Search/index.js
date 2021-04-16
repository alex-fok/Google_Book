import {useState} from 'react';
import Searcher from '../../components/Searcher';
import BookList from '../../components/BookList';

import API from '../../utils/API';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [bookList, setBookList] = useState([]);
  
  const searchForBook = async() => {
    const {data} = await API.searchFor(keyword);
    const results = data.map(b => ({
      id: b.id,
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