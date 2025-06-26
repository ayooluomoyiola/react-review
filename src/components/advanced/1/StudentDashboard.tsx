import { useEffect, useState } from "react";

type Course = {
  id: string;
  name: string;
  assigment: Assignment;
};

type Assignment = {
  id: string;
  name: string;
  dueDate: string;
};

const fetchStudentData = async (id: string) => {
  return new Promise<{ id: string; name: string }>((resolve) =>
    setTimeout(() => resolve({ id, name: "John Doe" }), 500)
  );
};

const fetchStudentCourses = (studentId: string) => {
  return new Promise<Course[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: `course1-${studentId}`,
            name: "Math 101",
            assigment: {
              id: "1",
              name: "Computer Architeture",
              dueDate: "10-05-2025",
            },
          },
          {
            id: `course2-${studentId}`,
            name: "Biology 201",
            assigment: {
              id: "1",
              name: "Software Engineering",
              dueDate: "12-06-2025",
            },
          },
        ]),
      5000
    )
  );
};

const fetchCourseAssignments = async (courseId: string) => {
  return new Promise<Assignment[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: `a-${courseId}-1`,
            name: `Assignment 1 for ${courseId}`,
            dueDate: "2025-06-24T23:59:59",
          },
          {
            id: `a-${courseId}-2`,
            name: `Assignment 2 for ${courseId}`,
            dueDate: "2025-07-01T23:59:59",
          },
        ]),
      30000
    )
  );
};

const fetchFilteredAssignments = async (courseFilter: string) => {
  return new Promise<Assignment[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: `f-${courseFilter}-1`,
            name: `Filtered Assignment for ${courseFilter}`,
            dueDate: "2025-06-20T23:59:59",
          },
        ]),
      50000
    )
  );
};

const StudentDashboard = () => {
  const studentId = "12345";
  const [courseFilter] = useState<string | null>(null);

  const [student, setStudent] = useState<{ id: string; name: string } | null>(
    null
  );
  const [courses, setCourses] = useState<Course[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastFetch, setLastFetch] = useState(Date.now());
  console.log(lastFetch);

  useEffect(() => {
    setLoading(true);
    fetchStudentData(studentId).then((data) => {
      setStudent(data);
      setLoading(false);
    });
  }, [studentId]); // missing dep

  useEffect(() => {
    if (student) {
      fetchStudentCourses(student.id).then((courses) => {
        setCourses(courses);
        setLastFetch(Date.now());
      });
    }
  }, [student]); // remove lastFetch

  useEffect(() => {
    const interval = setInterval(() => {
      if (courses.length > 0) {
        console.log(`Refreshing data for ${courses.length} courses`);
        courses.forEach((course) => {
          fetchCourseAssignments(course.id).then((newAssignments) => {
            setAssignments((prev) => [...prev, ...newAssignments]);
          });
        });
      }
    }, 300);

    return () => clearInterval(interval);
  }, [courses]); // add courses to dep array

  useEffect(() => {
    let isCurrent = true;
    if (courseFilter) {
      // user types "m" (500ms), then "ma" (400ms), then "math" (300ms)
      fetchFilteredAssignments(courseFilter).then((result) => {
        if (isCurrent) setAssignments(result);
      });
    }
    return () => {
      isCurrent = false;
    };
  }, [courseFilter, studentId]); //

  const overdueCount = assignments.filter(
    (a) => new Date(a.dueDate) < new Date()
  ).length; // unnecessary effect removed

  return (
    <div>
      {loading && <div>Loading...</div>}
      {student && (
        <div>
          <h1>{student.name}'s Dashboard</h1>
          <p>Courses: {courses.length}</p>
          <p>Assignments: {assignments.length}</p>
          <p>Overdue: {overdueCount}</p>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
