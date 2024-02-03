import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from './test.json';

function MainCarousel({ city }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const cityData = city ? data.find(item => item.city === city) : null;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {cityData && cityData.places.map((place, index) => (
        <Carousel.Item key={index}>
          <div
            className="d-block w-100"
            style={{ backgroundColor: "#300", height: "93vh" }}
          />
          <Carousel.Caption>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainCarousel;