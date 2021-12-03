import React, { useState, useEffect } from "react";
import { Form, Button, Stack } from "react-bootstrap";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <Form.Group>
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Stack direction="horizontal" gap={3}>
        <Button variant="primary" type="submit">
          Update user
        </Button>
        <Button variant="danger" onClick={() => props.setEditing(false)}>
          Cancel
        </Button>
      </Stack>
    </Form>
  );
};

export default EditUserForm;
