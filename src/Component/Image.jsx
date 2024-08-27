import React from 'react';
import { Card } from 'react-bootstrap';
  // Assure-toi d'importer Card ici

const Image = ({ image }) => {
  return <Card.Img variant="top" src={image} alt="Product" />;
};

export default Image;
