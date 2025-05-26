

// import Details from "./Details"


// const Detailss={
//   "name":"john",
//   "subject":"react js ",
//   "address":"neelbad",
//   "fees":40000
// }
// const name="akshat"
// const age=19
// const pro= <ol>
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Grapes</li>
//   <li>Pineapple</li> 
// </ol>
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is imported
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import b1 from "./images/b1.jpg";
import b2 from "./images/b2.jpg";


import b3 from "./images/b3.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";

import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import { Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


const Data1 = {
  color: "red",
  fontFamily: "Verdana"
};

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary bg-light">
        <Container fluid>
          <Navbar.Brand href="#">Cybrom</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Courses</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something Else</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       <Carousel>
      <Carousel.Item>
              <img src={b1} alt="images" height="500px" width="100%" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
               <img src={b2} alt="images" height="500px" width="100%" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={b3} alt="images" height="500px" width="100%" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<Row className="m-4" xs={1} sm={2} md={3} lg={4}>
  <Col>
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

  <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />


      <h1 style={Data1}>Welcome to Cybrom</h1>
    </>
  );
};


export default App;


//  {/* Hello below is your answer <br /> 
//     <Deatils  nm={Detailss.nm} sub={Detailss.sub} add={Detailss.add} fees={Detailss.fees} /> 
    
//      */}
   

    
//     {/* <p>Hello my name is {name} and my age is {age}</p>
//     <p>and my age after 3 years will be {age + 3}</p>
//     <p>I like {pro}</p>
//     <p>Below is application form</p>
//     Enter name <input type="text" /> <br />
//     Enter age <input type="number" /><br />
//     Enter city <input type="text" /> */}