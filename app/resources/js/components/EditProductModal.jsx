import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditProductModal = ({ show, handleClose, product, handleUpdate }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category_id, setCategoryId] = useState(product.category.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(product.id, { name, description, price, category_id });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Izmeni proizvod</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Naziv proizvoda</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Opis proizvoda</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Cena</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="category_id">
            <Form.Label>Kategorija</Form.Label>
            <Form.Control
              as="select"
              value={category_id}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
                <option value={1}>Izaberi kategoriju</option>
                <option value={1}>Cleanser</option>
                <option value={2}>Treatment</option>
                <option value={3}>Toner</option>
                <option value={4}>Moisturiser</option>
                <option value={5}>Sun protection</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sačuvaj izmene
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProductModal;
