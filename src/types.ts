export type Student = {
  name: string;
  age: number;
  grade: string;
};

export type ChildProps = {
  students: Student[];
};

export type ChildProps2 = {
  students: Student2[];
};

export type Student2 = {
  id: number;
  name: string;
  email: string;
  grade: string;
  course: string;
};

export type ButtonProps = {
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  status: boolean;
  children: React.ReactNode;
};

export type Assignment = {
  id: number;
  name: string;
  markDone: boolean;
};

export type Course = {
  id: number;
  title: string;
  instructor: string;
  students: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  reviews: number;
};

export type Filters = {
  category?: string;
  inStock?: boolean;
  priceRange: {
    min: number;
    max: number;
  };
};

export type User = {
  name: string;
  role: string;
};
