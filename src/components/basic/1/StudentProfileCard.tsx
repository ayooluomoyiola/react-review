import StudentsCard from "./Students";

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@email.com",
    grade: "A",
    course: "React Fundamentals",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@email.com",
    grade: "B+",
    course: "Advanced JavaScript",
  },
];

const StudentProfileCard = () => {
  return <StudentsCard students={students} />;
};

export default StudentProfileCard;
