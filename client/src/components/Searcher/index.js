import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Searcher = ({handleInputChange, search}) => {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className='my-3'>
            <FormControl
              placeholder='Keyword...'
              aria-label='Keyword'
              aria-describedby='keyword'
              onChange={handleInputChange}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={search}
              >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Searcher;
