import type { Course, School } from "./types";

export const schoolList: School[] = [
  { id: 1, name: "Covenant University" },
  { id: 2, name: "Obafemi Awolowo University" },
  { id: 3, name: "Babcock University" },
  { id: 4, name: "Caleb University" },
];

export const courseList: Course[] = [
  { id: 100, schId: 1, name: "Computer Architecture", code: "CSC227" },
  { id: 500, schId: 1, name: "Linear Algebra", code: "MAT214" },
  { id: 200, schId: 2, name: "Software Engineering", code: "CSC411" },
  {
    id: 600,
    schId: 2,
    name: "Intro to Management Info Systems",
    code: "MIS221",
  },
  { id: 700, schId: 3, name: "Calculus", code: "MAT111" },
  { id: 300, schId: 3, name: "Computational Biology", code: "CSC442" },
  { id: 400, schId: 4, name: "Computer Networks", code: "CSC424" },
  { id: 800, schId: 4, name: "Vector Analysis", code: "MAT121" },
];
