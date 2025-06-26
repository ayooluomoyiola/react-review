import React from "react";
import type { ChildProps2 } from "../../../types";
import GradeBadge from "./GradeBadge";

const StudentsCard: React.FC<ChildProps2> = ({ students }) => {
  return (
    <div>
      {students.map((student) => (
        <div
          key={student.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "15px" }}
        >
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
          <span
            style={{
              backgroundColor:
                student.grade === "A"
                  ? "green"
                  : student.grade.startsWith("B")
                  ? "blue"
                  : "orange",
              color: "white",
              padding: "5px",
            }}
          >
            <GradeBadge students={students} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default StudentsCard;
