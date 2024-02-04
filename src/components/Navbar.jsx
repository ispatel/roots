import { Container, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AddLandmarkModal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import cityData from "./test.json";

function Navbar({ onCitySelect }) {
    const [city, setCity] = useState(null);

    const handleCityChange = (city) => {
        setCity(city);
        onCitySelect(city);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#333",
                color: "white",
                padding: "25px",
                height: "8vh",
            }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={4} className="align-items-center">
                        <Container>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={city || "Select a City!"}
                            >
                                {cityData.map((cityObj, index) => {
                                    return (
                                        <Dropdown.Item
                                            key={index}
                                            onClick={() =>
                                                handleCityChange(cityObj.city)
                                            }
                                        >
                                            {cityObj.city}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        </Container>
                    </Col>
                    <Col
                        xs={4}
                        className="align-items-center justify-content-center d-flex"
                    >
                        <h1>Roots</h1>
                    </Col>
                    <Col
                        xs={4}
                        className="d-flex justify-content-end align-items-center"
                    >
                        <AddLandmarkModal />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Navbar;
