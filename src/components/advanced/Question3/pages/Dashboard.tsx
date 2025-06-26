// pages/Dashboard.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const mockSchools = [
  { id: "101", name: "Green Valley High" },
  { id: "102", name: "Riverside Academy" },
  { id: "103", name: "Hillside Institute" },
];

function Dashboard() {
  const { schoolId } = useParams();
  const [schoolName, setSchoolName] = useState("");
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalTeachers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const school = mockSchools.find((s) => s.id === schoolId);
    setSchoolName(school ? school.name : "Unknown School");

    // Simulate API call
    const timeout = setTimeout(() => {
      setStats({
        totalCourses: 8,
        totalStudents: 320,
        totalTeachers: 24,
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [schoolId]);

  if (loading) return <div className="page">Loading dashboard...</div>;

  return (
    <div className="page">
      <h2>Welcome to {schoolName} Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{stats.totalCourses}</p>
        </div>
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{stats.totalStudents}</p>
        </div>
        <div className="stat-card">
          <h3>Total Teachers</h3>
          <p>{stats.totalTeachers}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
