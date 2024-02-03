import './App.css';

import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import MainCarousel from './Carousel';

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];



function App() {
  const [city, setSelectedCity] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>Name</h1>
      <Container>
        <DropdownButton id="dropdown-basic-button" title={city || "Select a City!"}>
        {cities.map((city, index) => {
          return (
            <Dropdown.Item key={index} onClick={() => handleCityChange(city)}>
              {city}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      </Container>
      <br></br>
      <p>Selected City: {city}</p>
      <MainCarousel></MainCarousel>
    </div>
  );
}

export default App;
