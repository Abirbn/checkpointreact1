import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Component/Name';
import Price from './Component/Price';
import Description from './Component/Descreption';
import Image from './Component/Image';
import './App.css'
import product from './Product';

const App = () => {
  const firstName = "John"; // Remplace par ton prénom si tu veux

  return (
    <Container className="container">
      <Card className="card">
        <Image image={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <div className="welcome-message">
        {firstName ? (
          <>
            <h2>Bonjour, {firstName} !</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Greeting"
              className="welcome-image"
            />
          </>
        ) : (
          <h2>Bonjour !</h2>
        )}
      </div>
    </Container>
  );
}

export default App;
