import React, { useState } from 'react';
import MainCarousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {

  const [selectedCity, setSelectedCity] = useState(null);


  return (
    <div>
      <Navbar onCitySelect={setSelectedCity}></Navbar>
      <MainCarousel city={selectedCity}></MainCarousel>
    </div>
  );
}

export default App;
