import React from "react";
import type { ChildProps2 } from "../../../types";

const GradeBadge: React.FC<ChildProps2> = ({ students }) => {
  return (
    <>
      {students.map((student) => (
        <span>Grade: {student.grade}</span>
      ))}
    </>
  );
};

export default GradeBadge;
