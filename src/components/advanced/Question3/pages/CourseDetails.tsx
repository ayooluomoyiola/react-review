// pages/CourseDetails.tsx
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Course Details</h2>
      <p>Viewing details for course ID: {courseId}</p>
    </div>
  );
}

export default CourseDetails;
