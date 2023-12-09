import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const apiKey = 'AIzaSyA98gZqNk5ggt80pt0rJrWFMYrZfB1y8d0';

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 37.7749, lng: -122.4194 }}>
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  ))
);

function App() {

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1>Ma Page de Destination</h1>
          <p>Une application incroyable avec Google Maps!</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8}>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
