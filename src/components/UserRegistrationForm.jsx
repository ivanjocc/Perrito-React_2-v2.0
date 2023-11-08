import React, { useState } from "react";

function UserRegistrationForm({ addUser, onRegistrationSuccess }) {
  const [name, setName] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    const newUser = { name, score: 0 };
    addUser(newUser);
    setRegistered(true);
  };

  if (registered) {
    onRegistrationSuccess();
    return null;
  }

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleRegister}>Register User</button>
    </div>
  );
}

export default UserRegistrationForm;
