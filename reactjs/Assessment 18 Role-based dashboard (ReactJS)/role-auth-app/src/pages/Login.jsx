import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate(email.includes("admin") ? "/admin/users" : "/user/profile");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p style={{marginTop:"10px", fontSize:"12px"}}>
          Admin: admin@gmail.com / 123456<br/>
          User: user@gmail.com / 123456
        </p>
      </div>
    </div>
  );
};

export default Login;