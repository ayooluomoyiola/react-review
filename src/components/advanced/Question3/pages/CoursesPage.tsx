// pages/CoursesPage.tsx
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  status: string;
}

function fetchCourses(filter: string): Promise<Course[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          [
            { id: 1, name: "Math", status: "active" },
            { id: 2, name: "Science", status: "archived" },
          ].filter((c) => filter === "all" || c.status === filter)
        ),
      500
    )
  );
}

function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);

  const filter = searchParams.get("filter") || "all";

  useEffect(() => {
    fetchCourses(filter).then(setCourses);
  }, [filter]);

  const updateFilter = (newFilter: string) => {
    setSearchParams({ filter: newFilter, page: "1" });
  };

  return (
    <div>
      <h2>Courses</h2>
      <button onClick={() => updateFilter("all")}>All</button>
      <button onClick={() => updateFilter("active")}>Active</button>
      <button onClick={() => updateFilter("archived")}>Archived</button>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
