import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>Basic</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/homepage">
            <button>1. Homepage</button>
          </Link>
          <Link to="/student-profile">
            <button>2. Student Profile</button>
          </Link>
          <Link to="/login-form">
            <button>3. Login Form</button>
          </Link>
          <Link to="/assignment">
            <button>4. Homework</button>
          </Link>
          <Link to="/product-list">
            <button>5. Product List</button>
          </Link>
          <Link to="/cart">
            <button>5b. Cart</button>
          </Link>
          <Link to="/courses">
            <button>6. Courses</button>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>Advanced</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/product-page">
            <button>1. Product Page</button>
          </Link>
          <Link to="/student-dashboard">
            <button>2. Student Dashboard</button>
          </Link>
          <Link to="/product-main">
            <button>3. Product Main</button>
          </Link>
          <Link to="/product-second-main">
            <button>3.5. Product Main</button>
          </Link>
          <Link to="/schools">
            <button>4. LMS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
