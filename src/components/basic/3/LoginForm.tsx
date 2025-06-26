import Button from "./Button";

const LoginForm = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <Button variant="primary" size="large" status={true}>
        Login
      </Button>
      <Button variant="secondary" size="medium" status={false}>
        Cancel
      </Button>
    </form>
  );
};

export default LoginForm;
