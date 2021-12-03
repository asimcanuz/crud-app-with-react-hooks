import React from "react";
import { Table, Button, Stack, Alert } from "react-bootstrap";

const UserTable = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Stack direction="horizontal" gap={3}>
                  <Button
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => props.deleteUser(user.id)}>
                    Delete
                  </Button>
                </Stack>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>
              <Alert variant="danger">
                <Alert.Heading className="text-center">NO USERS</Alert.Heading>
              </Alert>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
