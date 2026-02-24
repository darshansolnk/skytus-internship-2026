const UserCard = ({ user, onToggle, onRemove }) => {

  return (
    <div
      className={`user-card ${
        user.status === "active" ? "active" : "inactive"
      }`}
    >
      <h4>{user.name}</h4>
      <p>Status: {user.status}</p>

      <button
        className="toggle-btn"
        onClick={() => onToggle(user.id)}
      >
        Toggle Status
      </button>

      <button
        className="remove-btn"
        onClick={() => onRemove(user.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default UserCard;