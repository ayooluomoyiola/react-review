import { useParams } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";

const CoursesPage = () => {
  const { courses, schools } = useSchoolContext();
  const { schoolId } = useParams<{ schoolId: string }>();

  const theSchoolID = schoolId ? parseInt(schoolId, 10) : null;

  const school = schools.find((sch) => sch.id === theSchoolID);
  const course = courses.filter((cour) => cour.schId === theSchoolID);

  if (!school) return <div>School not found</div>;
  if (!course) return <div>Course not found for this school</div>;

  return (
    <div>
      <h1>{school?.name}</h1>
      {course.map((cour) => (
        <div>
          <h2>
            {cour.code} - {cour.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
