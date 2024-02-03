import "./Carousel.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "./test.json";
import { LoadScript, GoogleMap, Map } from "@react-google-maps/api";
import StreetMap from "./StreetMap";
import { Container, Col, Row } from "react-bootstrap";

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
                                    <Row>
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
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div
                                                className="left"
                                                style={{ padding: "20px" }}
                                            >
                                                <img
                                                    src={place.imageUrl}
                                                    alt="African Burial Ground, NYC"
                                                    width={"100%"}
                                                    height={
                                                        window.innerHeight / 2
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div
                                                className="right"
                                                style={{ padding: "20px" }}
                                            >
                                                <LoadScript
                                                    googleMapsApiKey={key}
                                                    libraries={lib}
                                                >
                                                    <StreetMap
                                                        addr={`${place.name}, ${place.city}`}
                                                        height={
                                                            window.innerHeight /
                                                            2
                                                        }
                                                        width={"100%"}
                                                    />
                                                </LoadScript>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center text-center">
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
                                    </Row>
                                    <Row className="text-center">
                                        <p
                                            style={{
                                                color: "white",
                                                fontFamily: "Arial",
                                                fontSize: "1.3em",
                                                padding: "20px",
                                            }}
                                        >
                                            {place.description}
                                        </p>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <Carousel.Caption>{}</Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
}

export default MainCarousel;
