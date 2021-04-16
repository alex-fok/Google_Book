import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

const BookListItem = ({id, title, snippet, authors, image}) => {
  
  const save = () => {
    API.saveBook({id, title, snippet, authors, image})
  }
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
        <Row>
          <Col>
            <Button
              className='mr-2'
              variant='info'
              onClick={save}
            >Save</Button>
            <Button variant='success'>View</Button>
          </Col>
        </Row>
      
    </Container>
  )
}

const BookList = ({books}) => {
  return (
    <ListGroup>
      { 
        books.map((book, i) =>
          <BookListItem
            key={i}
            {...book}
          />
        )
      }  
    </ListGroup>
  )
}

export default BookList;