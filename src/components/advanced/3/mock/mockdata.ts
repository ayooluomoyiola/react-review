import type { Account, Assignment, Course, School } from "./types";

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
  { id: 300, schId: 3, name: "Computational Biology", code: "CSC442" },
  { id: 700, schId: 3, name: "Calculus", code: "MAT111" },
  { id: 400, schId: 4, name: "Computer Networks", code: "CSC424" },
  { id: 800, schId: 4, name: "Vector Analysis", code: "MAT121" },
];

export const loginDetails: Account[] = [
  {
    email: "admin@covenantuniversity.edu.ng",
    schId: 1,
    password: "Covenant",
    role: "admin",
  },
  { email: "admin@oau.edu.ng", schId: 2, password: "Covenant", role: "admin" },
  {
    email: "admin@babcockuniversity.edu.ng",
    schId: 3,
    password: "Covenant",
    role: "admin",
  },
  {
    email: "admin@calebuniversity.edu.ng",
    schId: 4,
    password: "Covenant",
    role: "admin",
  },
  {
    email: "goodnews.adewole@calebuniversity.edu.ng",
    schId: 4,
    password: "Covenant",
    role: "student",
  },
  {
    email: "miracle.anaele@calebuniversity.edu.ng",
    schId: 3,
    password: "Covenant",
    role: "student",
  },
  {
    email: "esan.miracle@calebuniversity.edu.ng",
    schId: 2,
    password: "Covenant",
    role: "student",
  },
  {
    email: "ayoolu.omoyiola@calebuniversity.edu.ng",
    schId: 1,
    password: "Covenant",
    role: "student",
  },
  {
    email: "chiedozie.nwosu@calebuniversity.edu.ng",
    schId: 4,
    password: "Covenant",
    role: "teacher",
  },
  {
    email: "demilade.sodimu@covenantuniversity.edu.ng",
    schId: 1,
    password: "Covenant",
    role: "teacher",
  },
];

export const assignmentList: Assignment[] = [
  {
    id: 1,
    courseId: 100,
    schId: 1,
    title: "Pipeline Stages",
    dueDate: "2025-07-01",
    description: "Explain the five stages of instruction pipeline.",
  },
  {
    id: 2,
    courseId: 100,
    schId: 1,
    title: "Memory Hierarchy",
    dueDate: "2025-07-08",
    description: "Summarize the levels of memory.",
  },

  {
    id: 3,
    courseId: 500,
    schId: 1,
    title: "Matrix Transformations",
    dueDate: "2025-07-03",
    description: "Apply transformation matrices to vectors.",
  },
  {
    id: 4,
    courseId: 500,
    schId: 1,
    title: "Eigenvalues",
    dueDate: "2025-07-10",
    description: "Find the eigenvalues of given matrices.",
  },

  {
    id: 5,
    courseId: 200,
    schId: 2,
    title: "SDLC Phases",
    dueDate: "2025-07-02",
    description:
      "Write a report on each phase of the Software Development Life Cycle.",
  },

  {
    id: 6,
    courseId: 600,
    schId: 2,
    title: "ERP Systems",
    dueDate: "2025-07-05",
    description: "Research and summarize an ERP software.",
  },

  {
    id: 7,
    courseId: 700,
    schId: 3,
    title: "Differentiation",
    dueDate: "2025-07-06",
    description: "Solve 10 differentiation problems.",
  },

  {
    id: 8,
    courseId: 300,
    schId: 3,
    title: "DNA Sequence Analysis",
    dueDate: "2025-07-04",
    description: "Write a program to analyze DNA sequences.",
  },

  {
    id: 9,
    courseId: 400,
    schId: 4,
    title: "IP Addressing",
    dueDate: "2025-07-09",
    description: "Design a subnetting scheme for a small network.",
  },

  {
    id: 10,
    courseId: 800,
    schId: 4,
    title: "Gradient Fields",
    dueDate: "2025-07-07",
    description: "Visualize gradient fields using vector calculus.",
  },
];
