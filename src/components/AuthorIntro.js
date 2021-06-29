import { Row, Col, Media } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">

      <Media className="mb-4 admin-intro">
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello There.</h5>
          <p className="welcome-text">
          This is Sujoy. Welcome to my Blogs.
          </p>
        </Media.Body>
      </Media>

    </Col>
  </Row>

export default AuthorIntro;