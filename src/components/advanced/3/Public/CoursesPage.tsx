import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSchoolContext } from "./SchoolContext";

const CoursesPage = () => {
  const { courses, schools } = useSchoolContext();
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const theSchoolID = schoolId ? parseInt(schoolId, 10) : null;

  const school = schools.find((sch) => sch.id === theSchoolID);
  const course = courses.filter((cour) => cour.schId === theSchoolID);

  if (!school) return <div>School not found</div>;
  if (!course) return <div>Course not found for this school</div>;

  const filteredCourses = course.filter((cour) =>
    cour.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <label style={{ marginBottom: "5px" }}>Search Courses:</label>
        <input
          type="text"
          value={searchQuery}
          style={{
            marginBottom: "10px",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
          }}
          onChange={(e) => {
            const value = e.target.value;
            setSearchParams(value ? { search: value } : {});
          }}
        />
      </div>
      {filteredCourses.map((cour) => (
        <div
          key={cour.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/schools/${school.id}/courses/${cour.id}`)}
        >
          <h2>
            {cour.code} - {cour.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
