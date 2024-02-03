import "./Carousel.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "./test.json";
import { LoadScript, GoogleMap, Map } from "@react-google-maps/api";
import StreetMap from "./StreetMap";
import { Container } from "react-bootstrap";

const key = process.env.REACT_APP_API_KEY;
const lib = ["places"];

function MainCarousel({ city }) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const cityData = city ? data.find((item) => item.city === city) : null;

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {cityData &&
                cityData.places.map((place, index) => (
                    <Carousel.Item key={index}>
                        <div
                            className="d-block w-100"
                            style={{ backgroundColor: "#300", height: "93vh" }}
                        >
                            <div>
                                <Container>
                                    <h1
                                        style={{
                                            textAlign: "center",
                                            color: "white",
                                            fontFamily: "Comic Sans MS",
                                            fontSize: "7em",
                                        }}
                                    >
                                        {place.name}
                                    </h1>
                                    <div
                                        className="left"
                                        style={{ padding: "20px" }}
                                    >
                                        <img
                                            src={place.imageUrl}
                                            alt="African Burial Ground, NYC"
                                            width={"100%"}
                                            height={window.innerHeight / 2}
                                        />
                                    </div>
                                </Container>
                                <Container>
                                    <div
                                        className="right"
                                        style={{ padding: "20px" }}
                                    >
                                        <LoadScript
                                            googleMapsApiKey={key}
                                            libraries={lib}
                                        >
                                            <StreetMap
                                                addr="326 Stonehouse Dr Apex, NC"
                                                height={window.innerHeight / 2}
                                                width={"100%"}
                                            />
                                        </LoadScript>
                                    </div>
                                </Container>
                                <a
                                    href={place.wikiUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "gold",
                                        fontStyle: "italic",
                                        fontSize: "1.8em",
                                        fontFamily: "Arial",
                                    }}
                                >
                                    Visit Wiki Page
                                </a>
                                <p>{place.description}</p>
                            </div>
                        </div>
                        <Carousel.Caption>
                            { }
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
}

export default MainCarousel;
