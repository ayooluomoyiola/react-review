import { useEffect, useState } from "react";
import { fetchCourses } from "./fetchCourses";
import type { Course } from "../../../types";

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [timeStamp, setTimeStamp] = useState(Date.now);

  const handleRefresh = () => setTimeStamp(Date.now());

  useEffect(() => {
    setLoading(true);
    fetchCourses()
      .then((data) => {
        setCourses(data as Course[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [timeStamp]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : courses.length ? (
        courses.map((course) => (
          <div
            key={course.id}
            style={{
              backgroundColor: "#222222",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #FAF9F6",
              margin: "10px",
            }}
          >
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>No of Students: {course.students}</p>
          </div>
        ))
      ) : (
        <h1>No courses exist</h1>
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Courses;
