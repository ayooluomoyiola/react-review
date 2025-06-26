// pages/Login.tsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname || "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login logic
    if (username && password) {
      // In real app, you'd set auth context or token
      console.log("Logged in as:", username);
      navigate(from, { replace: true });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 15 }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
