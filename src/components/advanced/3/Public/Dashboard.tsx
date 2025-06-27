import { useParams } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";

const Dashboard = () => {
  const { schools } = useSchoolContext();
  const { schoolId } = useParams<{ schoolId: string }>();

  const theSchoolID = schoolId ? parseInt(schoolId, 10) : null;

  const school = schools.find((sch) => sch.id === theSchoolID);

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
};

export default Dashboard;
