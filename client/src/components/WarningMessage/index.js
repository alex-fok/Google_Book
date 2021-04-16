import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Message = ({msg}) => {
 return (
  <Container className='mt-3'>
    <Row>
      <Col>
        <div className='text-danger'>{msg}</div>
      </Col>
    </Row>
  </Container>
 )
}

export default Message;
