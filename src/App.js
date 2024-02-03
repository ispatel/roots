import './App.css';

import React, { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];



function App() {
  const [selectedCity, setSelectedCity] = useState();

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>Name</h1>
      <Container>
        <Dropdown onChange={handleCityChange}>
          <Dropdown.Toggle id="dropdown-basic">
            {selectedCity}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {cities.map((city, index) => (
              <Dropdown.Item onSelect={() => handleCityChange(city)}>
                {city}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <br></br>
      <p>Selected City: {selectedCity}</p>
    </div>
  );
}

export default App;
