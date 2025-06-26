// pages/Landing.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const mockSchools = [
  { id: "101", name: "Green Valley High" },
  { id: "102", name: "Riverside Academy" },
  { id: "103", name: "Hillside Institute" },
];

function Landing() {
  const navigate = useNavigate();
  const [selectedSchoolId, setSelectedSchoolId] = useState("101");

  const handleSelect = () => {
    navigate(`/schools/${selectedSchoolId}/dashboard`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>Welcome to LMS</h2>
        <p>Select your school to continue:</p>

        <select
          value={selectedSchoolId}
          onChange={(e) => setSelectedSchoolId(e.target.value)}
        >
          {mockSchools.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))}
        </select>

        <div style={{ marginTop: 15 }}>
          <button onClick={handleSelect}>Enter School</button>
          <button style={{ marginLeft: 10 }} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
