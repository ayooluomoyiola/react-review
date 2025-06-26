import type { Student } from "../../../types";
import StudentData from "./StudentData";

const Homepage = () => {
  const students: Student[] = [
    { name: "Ayo", age: 18, grade: "A" },
    { name: "Juwon", age: 23, grade: "B" },
  ];

  return (
    <div>
      <StudentData students={students} />
    </div>
  );
};

export default Homepage;
