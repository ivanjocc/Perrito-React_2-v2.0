import React from "react";

function UserItem({ user, onIncrement, onDecrement, onReset, onDelete }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Points: {user.score}</p>
      <button onClick={onIncrement}>+10</button>
      <button onClick={onDecrement}>-10</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default UserItem;
