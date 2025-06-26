// pages/Assignments.tsx
import { useParams } from "react-router-dom";

function Assignments() {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Assignments</h2>
      <p>Showing assignments for course ID: {courseId}</p>
    </div>
  );
}

export default Assignments;
