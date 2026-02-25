const Error = ({ message }) => {
  return (
    <div style={{ textAlign: "center", padding: "40px", color: "red" }}>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;