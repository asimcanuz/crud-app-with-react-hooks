import React, { useState } from "react";
import AddUserForm from "./components/forms/AddUserForm";
import UserTable from "./components/tables/UserTable";
import EditUserForm from "./components/forms/EditUserForm";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const usersData = [
    { id: 1, name: "Asım", username: "eruiluvatar" },
    { id: 2, name: "Menekse", username: "kokachin" },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <h1>CRUD App with hooks</h1>
      <Row>
        <Col md={12} lg={6} className="mb-3">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2> Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </Col>
        <Col md={12} lg={6}>
          <h2> View User </h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
