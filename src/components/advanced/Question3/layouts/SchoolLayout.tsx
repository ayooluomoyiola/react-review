// layouts/SchoolLayout.tsx
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

interface School {
  id: string;
  name: string;
}

function fetchSchool(id: string): Promise<School> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: `School ${id}` }), 1000)
  );
}

function SchoolLayout() {
  const { schoolId } = useParams();
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (schoolId) {
      fetchSchool(schoolId).then((data) => {
        setSchool(data);
        setLoading(false);
      });
    }
  }, [schoolId]);

  if (loading) return <div>Loading school...</div>;

  return (
    <div>
      <nav>
        <strong>{school?.name}</strong> |<a href="dashboard">Dashboard</a> |
        <a href="courses">Courses</a> |<a href="users">Users</a> |
        <a href="settings">Settings</a>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default SchoolLayout;
