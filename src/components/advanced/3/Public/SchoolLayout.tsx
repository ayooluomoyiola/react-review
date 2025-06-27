import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSchoolContext } from "./SchoolContext";
import type { School } from "../mock/types";

const SchoolLayout = () => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState<School | null>(null);
  const { schools } = useSchoolContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (schoolId) {
      const id = parseInt(schoolId, 10);
      const found = schools.find((s) => s.id === id);
      setSchool(found ?? null);
      setLoading(false);
    }
  }, [schoolId, schools]);

  if (loading) return <p>Loading school data...</p>;
  if (!school) return <p>School not found.</p>;

  return (
    <div>
      <nav style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
        <h2>{school.name}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            color: "#FAF9F6",
          }}
        >
          <Link
            style={{ color: "#FAF9F6" }}
            to={`/schools/${school.id}/dashboard`}
          >
            Dashboard
          </Link>
          <Link
            style={{ color: "#FAF9F6" }}
            to={`/schools/${school.id}/courses`}
          >
            Courses
          </Link>
          <Link style={{ color: "#FAF9F6" }} to={`/schools/${school.id}/users`}>
            Users
          </Link>
          <Link
            style={{ color: "#FAF9F6" }}
            to={`/schools/${school.id}/settings`}
          >
            Settings
          </Link>
        </div>
      </nav>

      <Outlet />
      <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default SchoolLayout;
