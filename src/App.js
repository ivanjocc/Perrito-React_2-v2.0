import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";
import UserRegistrationForm from "./components/UserRegistrationForm";
import { users as defaultUsers, incrementScore, decrementScore, resetScore, deleteUser } from "./data/users";

function App() {
  const [users, setUsers] = useState(defaultUsers);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
    setRegistered(true);
  };

  const updateUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };

  const handleIncrementScore = (index) => {
    const user = users[index];
    incrementScore(index);
    updateUser(index, user);
  };

  const handleDecrementScore = (index) => {
    const user = users[index];
    decrementScore(index);
    updateUser(index, user);
  };

  const handleResetScore = (index) => {
    const user = users[index];
    resetScore(index);
    updateUser(index, user);
  };

  const handleDeleteUser = (index) => {
    deleteUser(index);
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <div className="container">
        <h1>User App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {loggedIn && (
              <>
                <li>
                  <Link to="/users">User List</Link>
                </li>
                <li>
                  <Link to="/register">Register User</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm onLoginSuccess={() => setLoggedIn(true)} />} />
          {loggedIn && (
            <>
              <Route
                path="/users"
                element={
                  <UserList
                    users={users}
                    onIncrement={handleIncrementScore}
                    onDecrement={handleDecrementScore}
                    onReset={handleResetScore}
                    onDelete={handleDeleteUser}
                  />
                }
              />
              {!registered && (
                <Route
                  path="/register"
                  element={<UserRegistrationForm addUser={addUser} onRegistrationSuccess={() => setRegistered(true)} />}
                />
              )}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
