import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import AddLandmarkModal from "./Modal";


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
                padding: "15px",
                height: "7vh",
            }}
        >
            <h1>Roots</h1>
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
            <AddLandmarkModal></AddLandmarkModal>
        </div>
    );
}

export default Navbar;
