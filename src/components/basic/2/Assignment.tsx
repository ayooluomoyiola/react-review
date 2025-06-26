import { useState } from "react";
import type { Assignment } from "../../../types";

const Homework = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim() === "") return;
    const newAssignment: Assignment = {
      id: Date.now(),
      name: value.trim(),
      markDone: false,
    };
    setAssignments([...assignments, newAssignment]);
  };

  const markDone = (id: Assignment["id"]) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, markDone: !a.markDone } : a
      )
    );
  };

  const handleDelete = (index: number) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== index));
  };

  return (
    <div>
      <p>Assignments</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {assignments.map((a) => (
          <li key={a.id}>
            {a.name}
            <button
              onClick={() => markDone(a.id)}
              style={{ marginLeft: "10px" }}
            >
              {a.markDone ? "Undo" : "Mark Done"}
            </button>
            <button
              onClick={() => handleDelete(a.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homework;
