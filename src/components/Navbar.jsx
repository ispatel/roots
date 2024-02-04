import { Container, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AddLandmarkModal from "./Modal";
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar({ onCitySelect }) {
    const [city, setCity] = useState(null);

    const handleCityChange = (city) => {
        setCity(city);
        onCitySelect(city);
    };

    const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#333",
                color: "white",
                padding: "25px",
                height: "7vh",
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
                    {cities.map((city, index) => {
                        return (
                            <Dropdown.Item
                                key={index}
                                onClick={() => handleCityChange(city)}
                            >
                                {city}
                            </Dropdown.Item>
                        )
                    })}
                </DropdownButton>
            </Container>
            </Col>
            <Col xs={4} className="align-items-center">
            <h1>Roots</h1>
            </Col>
            <Col xs={4} className="align-items-center">
            <AddLandmarkModal></AddLandmarkModal>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Navbar;
