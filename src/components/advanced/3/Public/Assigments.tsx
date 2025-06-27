import { useParams } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";
import { assignmentList } from "../mock/mockdata";
import type { Assignment } from "../mock/types";

const Assignments = () => {
  const { courses, schools } = useSchoolContext();
  const { courseId } = useParams<{ courseId: string }>();
  const { schoolId } = useParams<{ schoolId: string }>();

  const courId = courseId ? parseInt(courseId, 10) : null;
  const theSchoolID = schoolId ? parseInt(schoolId, 10) : null;

  const school = schools.find((sch) => sch.id === theSchoolID);
  const course = courses.find(
    (cour) => cour.id === courId && cour.schId === theSchoolID
  );

  const assignments = assignmentList.filter((a) => a.courseId === courId);

  if (!school) return <div>School not found</div>;
  if (!course) return <div>Course not found for this school</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Assignments for {course.name}</h3>
      {assignments.length === 0 ? (
        <p>No assignments found for this course.</p>
      ) : (
        assignments.map((a: Assignment) => (
          <div
            style={{
              backgroundColor: "#1F1F1F",
              marginBottom: "20px",
              borderRadius: "8px",
              padding: "20px 15px",
            }}
            key={a.id}
          >
            <strong>{a.title}</strong> - Due {a.dueDate}
            <p>{a.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Assignments;
