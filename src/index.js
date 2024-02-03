import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { LoadScript, GoogleMap, Map } from '@react-google-maps/api';
import StreetMap from './components/StreetMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const key = 'AIzaSyB3eiU-iZ06emJ4rDDW8G8mEDS5fD6zn9Q';
const lib = ["places"];

root.render(
  <>
    {/* <LoadScript googleMapsApiKey={key} libraries={lib}>
      <StreetMap 
        addr="326 Stonehouse Drive, Apex, NC"
      />
    </LoadScript> */}
    <App />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
