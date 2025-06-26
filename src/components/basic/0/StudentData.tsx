import type { ChildProps } from "../../../types";

const StudentData: React.FC<ChildProps> = ({ students }) => {
  return (
    <div>
      {students.map((student) => (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentData;
