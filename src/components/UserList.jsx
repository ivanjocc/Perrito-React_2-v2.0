import React from "react";
import UserItem from "./UserItem";
import { users } from "../data/users";
import { incrementScore, decrementScore, resetScore, deleteUser } from "../data/users";

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user, index) => (
        <UserItem
          key={index}
          user={user}
          onIncrement={() => incrementScore(index)}
          onDecrement={() => decrementScore(index)}
          onReset={() => resetScore(index)}
          onDelete={() => deleteUser(index)}
        />
      ))}
    </div>
  );
}

export default UserList;
