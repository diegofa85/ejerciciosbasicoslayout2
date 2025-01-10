import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col md={4} xl={4}>
          <div>Mujer</div>
        </Col>
        <Col md={4} xl={4}>
          <Image src={"./foto1.jpg"} style={{height:175, width:200, marginLeft: '200px'}}/>
        </Col>
        <Col md={4} xl={4}>
          <div style={{ marginTop: '25px' }}>
            <p>David</p>
            <p>Pérez</p>
            <p>García</p>
            <p>Foto de Carnet new</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} xl={4}>
          <div>Mujer</div>
        </Col>
        <Col md={4} xl={4}>
          <Image src={"./foto1.jpg"} style={{height:175, width:200, marginLeft: '200px', marginTop: '50px'}}/>
        </Col>
        <Col md={4} xl={4}>
          <div style={{ marginTop: '25px' }}>
            <p>David</p>
            <p>Pérez</p>
            <p>García</p>
            <p>Foto de Carnet new</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} xl={4}>
          <div>Mujer</div>
        </Col>
        <Col md={4} xl={4}>
          <Image src={"./foto1.jpg"} style={{height:175, width:200, marginLeft: '200px'}}/>
        </Col>
        <Col md={4} xl={4}>
          <div style={{ marginTop: '25px' }}>
            <p>David</p>
            <p>Pérez</p>
            <p>García</p>
            <p>Foto de Carnet new</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} xl={4}>
          <div style={{width:2000, marginTop: '150px'}}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        </Col>
        <Col md={4} xl={4}>
          <Image src={"./foto1.jpg"} style={{height:175, width:200, marginLeft: '200px'}}/>
        </Col>
        <Col md={4} xl={4}>
          <div style={{ marginTop: '25px' }}>
            <p>David</p>
            <p>Pérez</p>
            <p>García</p>
            <p>Foto de Carnet new</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
