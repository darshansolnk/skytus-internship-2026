import { useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {

  // Store users in state
  const [users, setUsers] = useState([
    { id: 1, name: "Darshan", status: "active" },
    { id: 2, name: "Dev", status: "inactive" },
    { id: 3, name: "Harsh", status: "active" }
  ]);

  // Toggle user status
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            status: user.status === "active" ? "inactive" : "active"
          }
        : user
    );

    setUsers(updatedUsers);
  };

  // Remove user
  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="app-container">
      <h2>User List</h2>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <div className="no-users">No users available</div>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onToggle={toggleStatus}
            onRemove={removeUser}
          />
        ))
      )}
    </div>
  );
};

export default UserList;