import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddUserForm = (props) => {
  const initialFormState = { id: "", name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add new user
      </Button>
    </Form>
  );
};

export default AddUserForm;
