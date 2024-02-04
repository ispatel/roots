import "./Carousel.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../data.json";
import { LoadScript } from "@react-google-maps/api";
import StreetMap from "./StreetMap";
import { Container, Col, Row } from "react-bootstrap";
import logo from "./logo.png";

const key = process.env.REACT_APP_API_KEY;
const lib = ["places"];

function MainCarousel({ city }) {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        setIndex(0);
    }, [city]);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    if (!city) {
        return (
            <div
                className="d-block w-100 scrollable-content"
                style={{
                    background: "radial-gradient(circle at center, #777, #333)",
                    height: "93vh",
                }}
            >
                <img
                    src={logo}
                    alt="rename test"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: window.innerHeight / 10,
                        width: "50%",
                        height: "auto",
                    }}
                />
            </div>
        );
    }

    const cityData = city ? data.find((item) => item.city === city) : null;

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {cityData &&
                cityData.places.map((place, i) => (
                    <Carousel.Item key={i}>
                        <div
                            className="d-block w-100 scrollable-content"
                            style={{
                                backgroundColor: "#333",
                                height: "93vh",
                            }}
                        >
                            <Container>
                                <Row>
                                    <h1
                                        style={{
                                            textAlign: "center",
                                            color: "white",
                                            fontSize: "10vh",
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
                                                className="shadowed-image"
                                                src={place.imageUrl}
                                                alt="image"
                                                width={"100%"}
                                                height={window.innerHeight / 2}
                                            />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div
                                            className="right"
                                            style={{ padding: "20px" }}
                                        >
                                            {index === i && (
                                                <LoadScript
                                                    googleMapsApiKey={key}
                                                    libraries={lib}
                                                >
                                                    <StreetMap
                                                        className="shadowed-image"
                                                        addr={`${place.name}, ${place.city}`}
                                                        height={
                                                            window.innerHeight /
                                                            2
                                                        }
                                                        width={"100%"}
                                                    />
                                                </LoadScript>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center text-center">
                                    <a
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                        href={place.wikiUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: hover ? "lightblue" : "gold",
                                            fontStyle: "italic",
                                            fontSize: "3vh",
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
                                            fontSize: "2vh",
                                            padding: "20px",
                                        }}
                                    >
                                        {place.description}
                                    </p>
                                    <br></br>
                                </Row>
                            </Container>
                        </div>
                        <Carousel.Caption>{}</Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
}

export default MainCarousel;
