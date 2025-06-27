export type School = {
  id: number;
  name: string;
};

export type Course = {
  id: number;
  schId: number;
  name: string;
  code: string;
};

export type Account = {
  email: string;
  password: string;
  schId: number;
  role: "student" | "teacher" | "admin";
};

export type Assignment = {
  id: number;
  courseId: number;
  schId: number;
  title: string;
  dueDate: string;
  description: string;
};
