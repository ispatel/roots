import './Carousel.css'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from './test.json';
import { LoadScript, GoogleMap, Map } from '@react-google-maps/api';
import StreetMap from './StreetMap';

const key = process.env.REACT_APP_API_KEY;
const lib = ["places"];


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
          <div className="d-block w-100" style={{ backgroundColor: "#300", height: "93vh" }}>
            <div>
              <div className="left">
                <img src='https://via.placeholder.com/150' alt='African Burial Ground, NYC' width={'100%'} height={window.innerHeight / 2}/>
              </div> 
              <div className="right">
                <LoadScript googleMapsApiKey={key} libraries={lib}>
                  <StreetMap 
                    addr="326 Stonehouse Dr Apex, NC"
                    height={window.innerHeight / 2}
                    width={'100%'}
                  />
                </LoadScript>
              </div>
            </div> 
          </div>
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