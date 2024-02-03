import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ backgroundColor: '#333', height: '90vh' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ backgroundColor: '#333', height: '90vh' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ backgroundColor: '#333', height: '90vh' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;