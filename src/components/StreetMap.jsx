import React, { useEffect, useState } from "react";
import { GoogleMap, StreetViewPanorama, useJsApiLoader } from "@react-google-maps/api";
import axios from 'axios';

function StreetMap({addr, height, width}) {
  const containerStyle = {
    width: width,
    height: height,
  };

  

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    const fetchData = async () => {
      try {
        var newAddr = addr.replaceAll(" ", "%20");
        console.log(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}address=${newAddr}`);

        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${newAddr}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const center = {
    lat: data.results[0].geometry.location.lat,
    lng: data.results[0].geometry.location.lng
  };

  return (
    <>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18} options={{streetViewControl: true}}>
      <StreetViewPanorama
        id="street-view"
        mapContainerStyle={containerStyle}
        position={center}
        visible={true}
        pov={{ heading: 0, pitch: 0 }}
        options={{pov: { heading: 0, pitch: 0 }, visible: true}}
      />
    </ GoogleMap>
    </>
  );
}

export default StreetMap;
