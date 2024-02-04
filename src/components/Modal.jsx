import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function AddLandmarkModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const handleClose = () => {
    setShow(false);
    setName('');
    setCity('');
    setError(false)
  };

  const handleShow = () => setShow(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '' && city.trim() !== '') {
      try {
        const response = axios.get(`http://localhost:5000/summary?name=${name}&city=${city}`);
        console.log(response)
      } catch (error) {
        setError(true)
      }
      
      
      console.log('Submitted:', name, city);
      handleClose();
    } else {
      setError(true)
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Landmark
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Landmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="form.name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={handleCityChange}
              />
            </Form.Group>
            {error && (<div style={{ color: 'red' }} > Submission must be non-empty </div>)}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddLandmarkModal;