import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BookListItem = (props) => {
  const {title, snippet, authors, image, btn} = props;
  const btnFn = (props) => btn.fn(props);
  
  return (
    <Container className='mb-3 py-4 border border-secondary rounded'>
      <Row>
        <Col md={9}>
          <p className='float-left font-weight-bold'>{title}</p>

          {/* Attribute 'danerouslySetInnerHTML' is used to incorporate Google Book API's response */}
          <p className='float-left' dangerouslySetInnerHTML={{__html: snippet}}></p>
          
          <p className='float-left font-weight-light'><small>Written By {authors}</small></p>
        </Col>
        <Col md={2}>
          <img src={image} alt={'book_image'}/>
        </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <Button
              className='mr-2'
              variant={btn.theme}
              onClick={() =>btnFn(props)}
            >{btn.type}</Button>
          </Col>
        </Row>
    </Container>
  )
}

const BookList = ({books, btn}) => {
  return (
    <ListGroup>
      { 
        books.map((book, i) =>
          <BookListItem
            key={i}
            {...book}
            btn={btn}
          />
        )
      }  
    </ListGroup>
  )
}

export default BookList;