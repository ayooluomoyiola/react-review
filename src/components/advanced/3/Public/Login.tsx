import { useNavigate } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";
import { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    currentAccount,
  } = useSchoolContext();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loginResult = handleLogin();

    if (typeof loginResult === "string") {
      setLoginError(loginResult);
    } else {
      setLoginError("");
    }
  };

  useEffect(() => {
    if (currentAccount) {
      navigate(`/schools/${currentAccount.schId}/dashboard`);
    }
  }, [currentAccount, navigate]);

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label style={{ marginBottom: "5px" }}>Email</label>
        <input
          type="email"
          style={{
            marginBottom: "10px",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={{ marginBottom: "5px" }}>Password</label>
        <input
          type="password"
          style={{
            marginBottom: "10px",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{ marginTop: "10px", alignSelf: "center" }}
          type="submit"
        >
          Login
        </button>
        {loginError && (
          <p style={{ color: "red", marginTop: "10px" }}>{loginError}</p>
        )}
      </div>
    </form>
  );
};

export default Login;
