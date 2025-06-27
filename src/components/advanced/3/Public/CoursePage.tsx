import { useNavigate, useParams } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";

const CoursePage = () => {
  const { courses, schools } = useSchoolContext();
  const { courseId } = useParams<{ courseId: string }>();
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();

  const courId = courseId ? parseInt(courseId, 10) : null;
  const theSchoolID = schoolId ? parseInt(schoolId, 10) : null;

  const school = schools.find((sch) => sch.id === theSchoolID);
  const course = courses.filter(
    (cour) => cour.id === courId && cour.schId === theSchoolID
  );

  if (!school) return <div>School not found</div>;
  if (!course) return <div>Course not found for this school</div>;

  return (
    <div>
      {course.map((cour) => (
        <div>
          <h2>
            {cour.code} - {cour.name}
          </h2>
          <button
            onClick={() =>
              navigate(`/schools/${school.id}/courses/${cour.id}/assignments`)
            }
          >
            See assignments
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
